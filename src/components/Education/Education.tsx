import React from 'react';
import { DatePicker, Input, Select } from 'antd';
import { Card } from '../Сard/Сard';
import { InfoBlock } from '../InfoBlock/InfoBlock';

export const Education = () => {
    return (
        <Card title="Образование">
            <InfoBlock label="Учреждение">
                <Input placeholder="Учреждение" />
            </InfoBlock>
            <InfoBlock label="Дата окончания">
                <DatePicker placeholder="Дата окончания" />
            </InfoBlock>
            <InfoBlock label="Степень">
                <Select
                    defaultValue={{
                        value: 'Бакалавриат',
                        label: 'Бакалавриат'
                    }}
                    optionFilterProp="label"
                    options={[
                        {
                            value: 'Бакалавриат',
                            label: 'Бакалавриат'
                        },
                        {
                            value: 'Магистратура',
                            label: 'Магистратура'
                        }
                    ]}
                />
            </InfoBlock>
        </Card>
    );
};
