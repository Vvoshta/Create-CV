import React from 'react';
import { DatePicker, Input } from 'antd';
import { Card } from '../Сard/Сard';
import { FormItem } from '../FormItem/FormItem';
import { Uploader } from '../Uploader/Uploader';

import dayjs from 'dayjs';

import { useDispatch } from 'react-redux';
import {
    setFullName,
    setPlaceOfLiving,
    setPhoneNumber,
    setBirthday,
    setAvatar
} from '../../store/reducers/PersonalInfoSlice';

export const PersonalInfo = () => {
    const dispatch = useDispatch();

    const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFullName(e.target.value));
    };

    const handlePlaceOfLivingChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        dispatch(setPlaceOfLiving(e.target.value));
    };

    const handlePhoneNumberChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        dispatch(setPhoneNumber(e.target.value));
    };

    const handleBirthdayChange = (dateString: string) => {
        dateString = dayjs().format();
        dispatch(setBirthday(dateString));
    };

    const handleAvatarChange = (base64String: string) => {
        dispatch(setAvatar(base64String));
    };

    return (
        <Card title="Персональная информация">
            <FormItem label="ФИО">
                <Input placeholder="ФИО" onChange={handleFullNameChange} />
            </FormItem>
            <FormItem label="Место жительства">
                <Input
                    placeholder="Место жительства"
                    onChange={handlePlaceOfLivingChange}
                />
            </FormItem>
            <FormItem label="Номер телефона">
                <Input
                    placeholder="Номер телефона"
                    onChange={handlePhoneNumberChange}
                />
            </FormItem>
            <FormItem label="Дата рождения">
                <DatePicker
                    placeholder="Дата рождения"
                    onChange={handleBirthdayChange}
                />
            </FormItem>
            <Uploader onBase64Change={handleAvatarChange} />
        </Card>
    );
};
