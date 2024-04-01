import React from 'react';
import { DatePicker, Input, Select } from 'antd';
import { Card } from '../Сard/Сard';
import { FormItem } from '../FormItem/FormItem';
import { DegreeOptions, degreeOptions } from './consts';

import { useDispatch } from 'react-redux';
import {
    setInstitution,
    setGraduationDate,
    setDegree
} from '../../store/reducers/EducationSlice';

export const Education = () => {
    const dispatch = useDispatch();

    const handleInstitutionChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        dispatch(setInstitution(e.target.value));
    };

    const handleGraduationDateChange = (dateString: string) => {
        dispatch(setGraduationDate(dateString));
    };

    const handleDegreeChange = (selectedDegree: DegreeOptions) => {
        dispatch(setDegree(selectedDegree));
    };

    return (
        <Card title="Образование">
            <FormItem label="Учреждение">
                <Input
                    placeholder="Учреждение"
                    onChange={handleInstitutionChange}
                />
            </FormItem>
            <FormItem label="Дата окончания">
                <DatePicker
                    placeholder="Дата окончания"
                    onChange={handleGraduationDateChange}
                />
            </FormItem>
            <FormItem label="Степень">
                <Select
                    optionFilterProp="label"
                    defaultValue={DegreeOptions.Bachelor}
                    options={degreeOptions}
                    onChange={handleDegreeChange}
                />
            </FormItem>
        </Card>
    );
};
