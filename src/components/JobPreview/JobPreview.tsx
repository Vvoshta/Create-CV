import React from 'react';
import { CalendarOutlined } from '@ant-design/icons';
import * as S from './style';
import { WorkPlace } from '../../store/reducers/WorkExpSlice';

import dayjs from 'dayjs';

// import { RootState } from '../../store/store';

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
                    {dayjs(workplace.workPeriodStart).format(
                        'DD.MM.YYYY'
                    )} - {dayjs(workplace.workPeriodEnd).format('DD.MM.YYYY')}
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
