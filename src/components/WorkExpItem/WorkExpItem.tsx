import React from 'react';
import { DatePicker, Input } from 'antd';
import { FormItem } from '../FormItem/FormItem';
import * as S from './style';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

export const WorkExpItem = ({ index }: { index: number }) => {
    return (
        <>
            <S.Header>Место работы - {index}</S.Header>
            <FormItem label="Компания">
                <Input placeholder="Компания" />
            </FormItem>
            <FormItem label="Должность">
                <Input placeholder="Должность" />
            </FormItem>
            <FormItem label="Период работы">
                <RangePicker placeholder={['Начало', 'Конец']} />
            </FormItem>
            <FormItem label="Описание">
                <TextArea rows={5} />
            </FormItem>
        </>
    );
};
