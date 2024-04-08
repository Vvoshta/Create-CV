import React from 'react';
import { DatePicker, Input } from 'antd';
import { FormItem } from '../FormItem/FormItem';
import * as S from './style';
import { Dayjs } from 'dayjs';

import { useDispatch } from 'react-redux';
import { updateWorkplace, WorkPlace } from '../../store/reducers/WorkExpSlice';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

interface WorkProps {
    index: number;
    workplace: WorkPlace;
}

export const WorkExpItem: React.FC<WorkProps> = ({ index, workplace }) => {
    const dispatch = useDispatch();

    const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(
            updateWorkplace({ index, workplace: { company: e.target.value } })
        );
    };

    const handleJobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(
            updateWorkplace({ index, workplace: { job: e.target.value } })
        );
    };

    const handleWorkPeriodChange = (
        dates: [Dayjs | null, Dayjs | null],
        dateStrings: [string, string]
    ) => {
        const [start, end] = dateStrings;
        dispatch(
            updateWorkplace({
                index,
                workplace: { workPeriodStart: start, workPeriodEnd: end }
            })
        );
    };

    const handleDescriptionChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        dispatch(
            updateWorkplace({
                index,
                workplace: { description: e.target.value }
            })
        );
    };

    return (
        <>
            <S.Header>Место работы - {index}</S.Header>
            <FormItem label="Компания">
                <Input placeholder="Компания" onChange={handleCompanyChange} />
            </FormItem>
            <FormItem label="Должность">
                <Input placeholder="Должность" onChange={handleJobChange} />
            </FormItem>
            <FormItem label="Период работы">
                <RangePicker
                    placeholder={['Начало', 'Конец']}
                    onChange={handleWorkPeriodChange}
                />
            </FormItem>
            <FormItem label="Описание">
                <TextArea rows={5} onChange={handleDescriptionChange} />
            </FormItem>
        </>
    );
};
