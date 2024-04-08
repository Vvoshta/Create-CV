import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks';
import { Button } from 'antd';
import { Card } from '../Сard/Сard';
import { WorkExpItem } from '../WorkExpItem/WorkExpItem';

import { addWorkplace } from '../../store/reducers/WorkExpSlice';

export const WorkExp = () => {
    const dispatch = useDispatch();

    const workExp = useAppSelector((state) => state.workExp);

    const handleWorkExpItem = () => {
        dispatch(addWorkplace());
    };

    useEffect(() => {
        dispatch(addWorkplace());
    }, []);

    return (
        <Card title="Опыт работы">
            {workExp.workplaces.map((workplace, index) => (
                <WorkExpItem
                    key={index}
                    index={index + 1}
                    workplace={workplace}
                />
            ))}
            <Button type="primary" onClick={handleWorkExpItem}>
                Добавить еще
            </Button>
        </Card>
    );
};
