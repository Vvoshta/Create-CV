import React, { useState } from 'react';
import { DatePicker, Input } from 'antd';
import { Card } from '../Сard/Сard';
import { FormItem } from '../FormItem/FormItem';
import { Uploader } from '../Uploader/Uploader';

import { useDispatch } from 'react-redux';
import {
    setFullName,
    setPlaceOfLiving,
    setPhoneNumber,
    setBirthday,
    setAvatar
} from '../../store/reducers/UserSlice';

export const PersonalInfo = () => {
    const dispatch = useDispatch();

    const [fullName, setFullNameValue] = useState('');
    const [placeOfLiving, setPlaceOfLivingValue] = useState('');
    const [phoneNumber, setPhoneNumberValue] = useState('');
    const [birthday, setBirthdayValue] = useState('');
    const [avatar, setAvatarValue] = useState<File | null>(null);

    const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFullNameValue(e.target.value);
        dispatch(setFullName(e.target.value));
    };

    const handlePlaceOfLivingChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPlaceOfLivingValue(e.target.value);
        dispatch(setPlaceOfLiving(e.target.value));
    };

    const handlePhoneNumberChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPhoneNumberValue(e.target.value);
        dispatch(setPhoneNumber(e.target.value));
    };

    const handleBirthdayChange = (dateString: string) => {
        setBirthdayValue(dateString);
        dispatch(setBirthday(dateString));
    };

    const handleAvatarChange = (file: File) => {
        setAvatarValue(file);
        dispatch(setAvatar(file));
    };

    return (
        <Card title="Персональная информация">
            <FormItem label="ФИО">
                <Input
                    placeholder="ФИО"
                    value={fullName}
                    onChange={handleFullNameChange}
                />
            </FormItem>
            <FormItem label="Место жительства">
                <Input
                    placeholder="Место жительства"
                    value={placeOfLiving}
                    onChange={handlePlaceOfLivingChange}
                />
            </FormItem>
            <FormItem label="Номер телефона">
                <Input
                    placeholder="Номер телефона"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                />
            </FormItem>
            <FormItem label="Дата рождения">
                <DatePicker
                    placeholder="Дата рождения"
                    value={birthday}
                    onChange={handleBirthdayChange}
                />
            </FormItem>
            <Uploader onChange={handleAvatarChange} />
            {avatar && (
                <div>
                    <p>Аватар:</p>
                    <img
                        src={URL.createObjectURL(avatar)}
                        alt="Аватар"
                        style={{ maxWidth: '100px' }}
                    />
                </div>
            )}
        </Card>
    );
};
