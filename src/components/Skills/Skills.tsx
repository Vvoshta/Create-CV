import React, { useState } from 'react';
import { Card } from '../Сard/Сard';
import { FormItem } from '../FormItem/FormItem';
import { Select, List } from 'antd';
import { skillsOptions } from './consts';

export const Skills = () => {
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

    const handleSkillChange = (selected: string[]) => {
        setSelectedSkills(selected);
    };

    return (
        <Card title="Навыки">
            <FormItem label="Навыки">
                <Select
                    showSearch
                    mode="multiple"
                    placeholder="Выберите навыки"
                    options={skillsOptions}
                    onChange={handleSkillChange}
                    allowClear
                />
            </FormItem>
            <List
                locale={{ emptyText: 'Навыки не выбраны' }}
                dataSource={selectedSkills}
                renderItem={(item) => <List.Item>{item}</List.Item>}
            />
        </Card>
    );
};
