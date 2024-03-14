import React, { useState } from 'react';
import { Button } from 'antd';
import { Card } from '../Сard/Сard';
import { WorkExpItem } from '../WorkExpItem/WorkExpItem';

export const WorkExp = () => {
    const [workExpItems, setWorkExpItems] = useState([{ key: 0, index: 1 }]);

    const handleWorkExpItem = () => {
        const newIndex = Math.random();
        setWorkExpItems([...workExpItems, { key: newIndex, index: newIndex }]);
    };

    return (
        <Card title="Опыт работы">
            {workExpItems.map((item) => (
                <WorkExpItem key={item.key} index={item.index} />
            ))}
            <Button type="primary" onClick={handleWorkExpItem}>
                Добавить еще
            </Button>
        </Card>
    );
};
