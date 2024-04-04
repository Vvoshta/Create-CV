import React from 'react';
import { useSelector } from 'react-redux';
import { ConsoleSqlOutlined } from '@ant-design/icons';
import * as S from './style';

import dayjs from 'dayjs';

import { RootState } from '../../store/store';

const LeftPreviewPart: React.FC = () => {
    const avatar = useSelector(
        (state: RootState) => state.personalInfoReducer.avatar
    );

    const birthday = dayjs(
        useSelector((state: RootState) => state.personalInfoReducer.birthday)
    );
    const ageInMilliseconds = dayjs().diff(birthday, 'millisecond');
    const ageInYears = Math.floor(
        ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)
    );

    const selectedSkills = useSelector(
        (state: RootState) => state.skillsReducer.skills
    );

    const placeOfLiving = useSelector(
        (state: RootState) => state.personalInfoReducer.placeOfLiving
    );

    return (
        <S.Wrapper>
            <S.Avatar src={avatar} alt="Avatar"></S.Avatar>
            <S.Title>Возраст</S.Title>
            {birthday.isValid()
                ? `${ageInYears} года (${birthday.format('DD.MM.YYYY')})`
                : ''}
            <S.Title>Место жительства</S.Title>
            {placeOfLiving && placeOfLiving}
            <S.SkillsWrapper>
                <S.SkillsTitle>
                    <ConsoleSqlOutlined />
                    Навыки
                </S.SkillsTitle>
                <S.SkillsList>
                    {selectedSkills.map((skill: string) => (
                        <li key={skill}>{skill}</li>
                    ))}
                </S.SkillsList>
            </S.SkillsWrapper>
        </S.Wrapper>
    );
};

export { LeftPreviewPart };
