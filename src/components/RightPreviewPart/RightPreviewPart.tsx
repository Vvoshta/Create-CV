import React from 'react';
import { ReadOutlined, CalendarOutlined } from '@ant-design/icons';
import { JobPreview } from '../JobPreview/JobPreview';
import { useAppSelector } from '../../hooks/hooks';
import { getFormattedDate } from '../../utils/utils';

import * as S from './style';

import dayjs from 'dayjs';

const RightPreviewPart: React.FC = () => {
    const workExpItems = useAppSelector((state) =>
        state.workExp.workplaces.filter((workplace) =>
            Object.values(workplace).some((value) => !!value)
        )
    );

    const personalInfo = useAppSelector((state) => state.personalInfo);
    const education = useAppSelector((state) => state.education);

    const graduationDate = dayjs(education.graduationDate);

    return (
        <S.Wrapper>
            <S.Title>{personalInfo.fullName}</S.Title>
            <S.Profession>Frontend Developer</S.Profession>
            <S.BlockTitle>
                <ReadOutlined />
                Образование
            </S.BlockTitle>
            <S.EducationBlock>
                <S.InstitutionTitle>{education.institution}</S.InstitutionTitle>
                <p>
                    Степень - <S.Degree>{education.degree}</S.Degree>
                </p>
                <p>
                    Дата окончания -{' '}
                    <b>
                        {graduationDate.isValid() &&
                            getFormattedDate(graduationDate)}
                    </b>
                </p>
            </S.EducationBlock>
            <S.BlockTitle>
                <CalendarOutlined />
                Опыт работы
            </S.BlockTitle>
            {workExpItems.map((workplace, index) => (
                <JobPreview key={index} workplace={workplace} />
            ))}
        </S.Wrapper>
    );
};

export { RightPreviewPart };
