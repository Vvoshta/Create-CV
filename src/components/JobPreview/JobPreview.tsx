import React from 'react';
import { CalendarOutlined } from '@ant-design/icons';
import * as S from './style';
import { WorkPlace } from '../../store/reducers/WorkExpSlice';
import { dateFormatted } from '../../utils/utils';

export const JobPreview: React.FC<{ workplace: WorkPlace }> = ({
    workplace
}) => {
    return (
        <S.Job>
            {workplace.company && <p>{workplace.company}</p>}
            {workplace.job && <p>{workplace.job}</p>}
            {workplace.workPeriodStart && workplace.workPeriodEnd && (
                <S.WorkPeriod>
                    <CalendarOutlined />
                    {dateFormatted(workplace.workPeriodStart)} -{' '}
                    {dateFormatted(workplace.workPeriodEnd)}
                </S.WorkPeriod>
            )}
            {workplace.description && (
                <S.WorkDescription>
                    <pre>{workplace.description}</pre>
                </S.WorkDescription>
            )}
        </S.Job>
    );
};
