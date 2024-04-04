import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';
import { Card } from '../Сard/Сard';
import { WorkExpItem } from '../WorkExpItem/WorkExpItem';
import { RootState } from '../../store/store';

import { addWorkplace } from '../../store/reducers/WorkExpSlice';

export const WorkExp = () => {
    const dispatch = useDispatch();

    const workExpItems = useSelector(
        (state: RootState) => state.workExpReducer.workplaces
    );

    const handleWorkExpItem = () => {
        dispatch(addWorkplace());
    };

    return (
        <Card title="Опыт работы">
            {workExpItems.map((workplace, index) => (
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
