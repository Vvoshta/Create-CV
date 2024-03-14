import React from 'react';
import { DatePicker, Input } from 'antd';
import { Card } from '../Сard/Сard';
import { FormItem } from '../FormItem/FormItem';
import { Uploader } from '../Uploader/Uploader';

export const PersonalInfo = () => {
    return (
        <Card title="Персональная информация">
            <FormItem label="ФИО">
                <Input placeholder="ФИО" />
            </FormItem>
            <FormItem label="Место жительства">
                <Input placeholder="Место жительства" />
            </FormItem>
            <FormItem label="Номер телефона">
                <Input placeholder="Номер телефона" />
            </FormItem>
            <FormItem label="Дата рождения">
                <DatePicker placeholder="Дата рождения" />
            </FormItem>
            <Uploader />
        </Card>
    );
};
