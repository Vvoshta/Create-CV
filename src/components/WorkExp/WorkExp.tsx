import React, { useState } from 'react';
import { Button } from 'antd';
import { Card } from '../Сard/Сard';
import { WorkExpItem } from '../WorkExpItem/WorkExpItem';

export const WorkExp = () => {
    const [workExpItems, setWorkExpItems] = useState([
        <WorkExpItem key={0} index={1} />
    ]);

    const addWorkExpItem = () => {
        const newIndex = workExpItems.length + 1;
        setWorkExpItems([
            ...workExpItems,
            <WorkExpItem key={newIndex} index={newIndex} />
        ]);
    };

    return (
        <Card title="Опыт работы">
            {workExpItems}
            <Button type="primary" onClick={addWorkExpItem}>
                Добавить еще
            </Button>
        </Card>
    );
};
