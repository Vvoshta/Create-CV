import React from 'react';
import { useAppSelector } from '../../hooks';
import { ConsoleSqlOutlined } from '@ant-design/icons';
import { dateFormatted, agesFormatted } from '../../utils/utils';
import * as S from './style';

import dayjs from 'dayjs';

const LeftPreviewPart: React.FC = () => {
    const personalInfo = useAppSelector((state) => state.personalInfo);
    const skills = useAppSelector((state) => state.skills);

    const birthday = dayjs(personalInfo.birthday);

    return (
        <S.Wrapper>
            <S.Avatar src={personalInfo.avatar}></S.Avatar>
            <S.Title>Возраст</S.Title>
            {birthday.isValid() && birthday.isBefore(dayjs())
                ? `${agesFormatted(birthday)} года (${dateFormatted(birthday)})`
                : ''}
            <S.Title>Место жительства</S.Title>
            {personalInfo.placeOfLiving && personalInfo.placeOfLiving}
            <S.SkillsWrapper>
                <S.SkillsTitle>
                    <ConsoleSqlOutlined />
                    Навыки
                </S.SkillsTitle>
                <S.SkillsList>
                    {skills.skills.map((skill: string) => (
                        <li key={skill}>{skill}</li>
                    ))}
                </S.SkillsList>
            </S.SkillsWrapper>
        </S.Wrapper>
    );
};

export { LeftPreviewPart };
