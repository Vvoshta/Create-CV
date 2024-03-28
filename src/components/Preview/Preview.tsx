import React, { useState } from 'react';
import { Modal, FloatButton, Button } from 'antd';

import { PreviewBlock } from '../PreviewBlock/PreviewBlock';
import { LeftPreviewPart } from '../LeftPreviewPart/LeftPreviewPart';
import { RightPreviewPart } from '../RightPreviewPart/RightPreviewPart';

import * as S from './style';

export const Preview: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handlePrint = () => {
        window.print();
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <FloatButton
                type="primary"
                shape="circle"
                description="Показать превью"
                style={{
                    width: '100px',
                    height: '100px'
                }}
                onClick={showModal}
            />
            <Modal
                open={isModalOpen}
                onCancel={handleCancel}
                width={1000}
                footer={null}
            >
                <PreviewBlock>
                    <S.BtnWrapper>
                        <Button onClick={handlePrint}>Скачать</Button>
                    </S.BtnWrapper>
                    <LeftPreviewPart></LeftPreviewPart>
                    <RightPreviewPart></RightPreviewPart>
                </PreviewBlock>
            </Modal>
        </>
    );
};
