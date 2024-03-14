import React from 'react';
import { DatePicker, Input, Select } from 'antd';
import { Card } from '../Сard/Сard';
import { FormItem } from '../FormItem/FormItem';
import { DegreeOptions, degreeOptions } from './consts';

export const Education = () => {
    return (
        <Card title="Образование">
            <FormItem label="Учреждение">
                <Input placeholder="Учреждение" />
            </FormItem>
            <FormItem label="Дата окончания">
                <DatePicker placeholder="Дата окончания" />
            </FormItem>
            <FormItem label="Степень">
                <Select
                    optionFilterProp="label"
                    defaultValue={DegreeOptions.Bachelor}
                    options={degreeOptions}
                />
            </FormItem>
        </Card>
    );
};
