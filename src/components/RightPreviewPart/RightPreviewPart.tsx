import React from 'react';
import { ReadOutlined, CalendarOutlined } from '@ant-design/icons';
import * as S from './style';

const RightPreviewPart: React.FC = () => {
    return (
        <S.Wrapper>
            <S.Title></S.Title>
            <S.Profession>Frontend Developer</S.Profession>
            <S.BlockTitle>
                <ReadOutlined />
                Образование
            </S.BlockTitle>
            <S.BlockTitle>
                <CalendarOutlined />
                Опыт работы
            </S.BlockTitle>
        </S.Wrapper>
    );
};

export { RightPreviewPart };
