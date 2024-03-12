import React, { useState } from 'react';
import { Card } from '../Сard/Сard';
import { InfoBlock } from '../InfoBlock/InfoBlock';
import { Select, List } from 'antd';
import skillsData from './Skills.json';

export const Skills = () => {
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

    const handleSkillChange = (selected: string[]) => {
        setSelectedSkills(selected);
    };

    const selectOptions = skillsData.map((skill) => ({
        value: skill.name,
        label: <span>{skill.name}</span>
    }));

    return (
        <Card title="Навыки">
            <InfoBlock label="Навыки">
                <Select
                    showSearch
                    mode="multiple"
                    placeholder="Выберите навыки"
                    options={selectOptions}
                    onChange={handleSkillChange}
                    allowClear
                />
            </InfoBlock>
            <List
                locale={{ emptyText: 'Навыки не выбраны' }}
                dataSource={selectedSkills}
                renderItem={(item) => <List.Item>{item}</List.Item>}
            />
        </Card>
    );
};
