import React, { useState } from 'react';
import { useRef } from 'react';
import { Modal, FloatButton, Button } from 'antd';
import { useReactToPrint } from 'react-to-print';

import { PreviewBlock } from '../PreviewBlock/PreviewBlock';
import { LeftPreviewPart } from '../LeftPreviewPart/LeftPreviewPart';
import { RightPreviewPart } from '../RightPreviewPart/RightPreviewPart';

import * as S from './style';

export const Preview: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const componentRef = useRef<HTMLDivElement>(null);

    const handleModal = () => setIsModalOpen(true);
    const handleCancel = () => setIsModalOpen(false);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    });

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
                onClick={handleModal}
            />
            <Modal
                open={isModalOpen}
                onCancel={handleCancel}
                width={1000}
                footer={null}
            >
                <PreviewBlock componentRef={componentRef}>
                    <LeftPreviewPart />
                    <RightPreviewPart />
                </PreviewBlock>
                <S.BtnWrapper>
                    <Button onClick={handlePrint}>Скачать</Button>
                </S.BtnWrapper>
            </Modal>
        </>
    );
};
