import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import type { UploadProps } from 'antd';

import * as S from './style';

const getBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

type UploaderProps = {
    onBase64Change: (base64String: string) => void;
};

export const Uploader: React.FC<UploaderProps> = ({ onBase64Change }) => {
    const [imageUrl, setImageUrl] = useState<string>();

    const handleChange: UploadProps['onChange'] = async (fileList) => {
        if (fileList.file && fileList.file instanceof File) {
            const base64 = await getBase64(fileList.file);
            setImageUrl(base64);
            onBase64Change(base64);
        }
    };

    const uploadButton = (
        <S.Button type="button">
            <PlusOutlined />
            <div>Выберите ваш аватар</div>
        </S.Button>
    );

    return (
        <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            beforeUpload={() => false}
            onChange={handleChange}
        >
            {imageUrl ? (
                <img
                    src={imageUrl}
                    alt="avatar"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            ) : (
                uploadButton
            )}
        </Upload>
    );
};
