import React from 'react';
import { ConsoleSqlOutlined } from '@ant-design/icons';
import * as S from './style';

const LeftPreviewPart: React.FC = () => {
    return (
        <S.Wrapper>
            <S.Avatar></S.Avatar>
            <S.Title>Возраст</S.Title>
            <S.Title>Место жительства</S.Title>
            <S.SkillsWrapper>
                <S.SkillsTitle>
                    <ConsoleSqlOutlined />
                    Навыки
                </S.SkillsTitle>
                <S.SkillsList></S.SkillsList>
            </S.SkillsWrapper>
        </S.Wrapper>
    );
};

export { LeftPreviewPart };
