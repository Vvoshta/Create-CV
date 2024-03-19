import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import type { GetProp, UploadProps } from 'antd';

import { setAvatar } from '../../store/reducers/PersonalInfoSlice';

import * as S from './style';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (img: FileType, callback: (base64String: string) => void) => {
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.addEventListener('load', () => callback(reader.result as string));
};

type UploaderProps = {
    onBase64Change: (base64String: string) => void;
};

export const Uploader: React.FC<UploaderProps> = ({ onBase64Change }) => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();
    const dispatch = useDispatch();

    const handleChange: UploadProps['onChange'] = (info) => {
        console.log(info.file.status);
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.originFileObj) {
            getBase64(info.file.originFileObj as FileType, (base64String) => {
                setLoading(false);
                setImageUrl(base64String);
                dispatch(setAvatar(base64String));
                onBase64Change(base64String);
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
        <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            onChange={handleChange}
            beforeUpload={() => false}
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
