import React, { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import type { GetProp, UploadProps } from 'antd';

import * as S from './style';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
};

export const Uploader: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();

    const handleChange: UploadProps['onChange'] = (info) => {
        if (info.file.status === 'uploading') {
            console.log(info.file.status);
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj as FileType, (url) => {
                console.log(info.file.status);
                setLoading(false);
                setImageUrl(url);
            });
        }
    };

    const uploadButton = (
        <S.Button type="button">
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div>Выберите ваш аватар</div>
        </S.Button>
    );

    return (
        <>
            <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
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
        </>
    );
};
