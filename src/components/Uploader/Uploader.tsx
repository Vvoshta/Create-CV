import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import type { GetProp, UploadProps } from 'antd';

import { setAvatar } from '../../store/reducers/PersonalInfoSlice';

import * as S from './style';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (img: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
        console.log('Starting conversion to base64...');
        const reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload = () => {
            console.log('Base64 conversion successful');
            resolve(reader.result as string);
        };
        reader.onerror = (error) => {
            console.error('Error during base64 conversion:', error);
            reject(error);
        };
    });

type UploaderProps = {
    onBase64Change: (base64String: string) => void;
};

export const Uploader: React.FC<UploaderProps> = ({ onBase64Change }) => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();
    const dispatch = useDispatch();

    const handleChange: UploadProps['onChange'] = async (info) => {
        console.log(info.file.status);

        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }

        if (info.file.originFileObj) {
            try {
                const base64String = await getBase64(info.file.originFileObj);
                setLoading(false);
                setImageUrl(base64String);
                dispatch(setAvatar(base64String));
                onBase64Change(base64String);
            } catch (error) {
                console.error('Error while converting to base64:', error);
            }
        }
    };

    const uploadButton = (
        <S.Button type="button">
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
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
