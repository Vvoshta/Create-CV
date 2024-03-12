import React from 'react';
import { DatePicker, Input, Select } from 'antd';
import { Card } from '../Сard/Сard';
import { FormItem } from '../FormItem/FormItem';
import { DegreeOptions } from './consts/consts';

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
                    defaultValue={{
                        value: DegreeOptions.Bachelor,
                        label: DegreeOptions.Bachelor
                    }}
                    optionFilterProp="label"
                    options={[
                        {
                            value: DegreeOptions.Bachelor,
                            label: DegreeOptions.Bachelor
                        },
                        {
                            value: DegreeOptions.Master,
                            label: DegreeOptions.Master
                        }
                    ]}
                />
            </FormItem>
        </Card>
    );
};
