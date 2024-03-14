import React from 'react';
import { DatePicker, Input, Select } from 'antd';
import { Card } from '../Сard/Сard';
import { FormItem } from '../FormItem/FormItem';
import { degreeOptions, DegreeOptions } from './consts';
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
                    options={degreeOptions}
                    defaultValue={DegreeOptions.Bachelor}
                />
            </FormItem>
        </Card>
    );
};
