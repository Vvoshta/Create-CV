import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/hooks';
import { Card } from '../Сard/Сard';
import { FormItem } from '../FormItem/FormItem';
import { Select, List } from 'antd';
import { skillsOptions } from './consts';

import { setSkills as setSkillsAction } from '../../store/reducers/SkillsSlice';

export const Skills = () => {
    const dispatch = useDispatch();

    const skills = useAppSelector((state) => state.skills);

    const handleSkillChange = (selected: string[]) => {
        dispatch(setSkillsAction(selected));
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
                dataSource={skills.skills}
                renderItem={(item) => <List.Item>{item}</List.Item>}
            />
        </Card>
    );
};
