// WorkExp.tsx
import React, { useState } from 'react';
import { Button } from 'antd';
import { Card } from '../Сard/Сard';
import { WorkExpItem } from '../WorkExpItem/WorkExpItem';

import { useDispatch } from 'react-redux';
import { addWorkplace, WorkPlace } from '../../store/reducers/WorkExpSlice';

export const WorkExp = () => {
    const dispatch = useDispatch();

    const [workExpItems, setWorkExpItems] = useState([{ key: 0, index: 1 }]);

    const handleWorkExpItem = () => {
        const newIndex = Math.random();
        setWorkExpItems([...workExpItems, { key: newIndex, index: newIndex }]);
    };

    const handleWorkplaceChange = (workplace: WorkPlace) => {
        dispatch(addWorkplace(workplace));
    };

    return (
        <Card title="Опыт работы">
            {workExpItems.map((item) => (
                <WorkExpItem
                    key={item.key}
                    index={item.index}
                    onWorkplaceChange={handleWorkplaceChange}
                />
            ))}
            <Button type="primary" onClick={handleWorkExpItem}>
                Добавить еще
            </Button>
        </Card>
    );
};
