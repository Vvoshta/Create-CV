import React from 'react';
import { useSelector } from 'react-redux';
import { ReadOutlined, CalendarOutlined } from '@ant-design/icons';
import { JobPreview } from '../JobPreview/JobPreview';
import * as S from './style';

import dayjs from 'dayjs';

import { RootState } from '../../store/store';

const RightPreviewPart: React.FC = () => {
    const graduationDate = dayjs(
        useSelector((state: RootState) => state.educationReducer.graduationDate)
    );

    const workExpItems = useSelector((state: RootState) =>
        state.workExpReducer.workplaces.filter((workplace) =>
            Object.values(workplace).some((value) => !!value)
        )
    );

    return (
        <S.Wrapper>
            <S.Title>
                {useSelector(
                    (state: RootState) => state.personalInfoReducer.fullName
                )}
            </S.Title>
            <S.Profession>Frontend Developer</S.Profession>
            <S.BlockTitle>
                <ReadOutlined />
                Образование
            </S.BlockTitle>
            <S.EducationBlock>
                <S.InstitutionTitle>
                    {useSelector(
                        (state: RootState) => state.educationReducer.institution
                    )}
                </S.InstitutionTitle>
                <p>
                    Степень -{' '}
                    <S.Degree>
                        {useSelector(
                            (state: RootState) => state.educationReducer.degree
                        )}
                    </S.Degree>
                </p>
                <p>
                    Дата окончания -{' '}
                    <b>{graduationDate.format('DD.MM.YYYY')}</b>
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
