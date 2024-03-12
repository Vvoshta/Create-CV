import React from 'react';
import { DatePicker, Input } from 'antd';
import { Card } from '../Сard/Сard';
import { InfoBlock } from '../InfoBlock/InfoBlock';
import { Uploader } from '../Uploader/Uploader';

export const PersonalInfo = () => {
    return (
        <Card title="Персональная информация">
            <InfoBlock label="ФИО">
                <Input placeholder="ФИО" />
            </InfoBlock>
            <InfoBlock label="Место жительства">
                <Input placeholder="Место жительства" />
            </InfoBlock>
            <InfoBlock label="Номер телефона">
                <Input placeholder="Номер телефона" />
            </InfoBlock>
            <InfoBlock label="Дата рождения">
                <DatePicker placeholder="Дата рождения" />
            </InfoBlock>
            <Uploader />
        </Card>
    );
};
