import React from "react"
import { List, Card } from 'antd';

const data = [
    {
        title: 'Santa Tecla',
    },
    {
        title: 'San Salvador',
    },
    {
        title: 'Santa Ana',
    },
];

const CardInfo = () => {
    return (
        <List
            grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 3,
            }}
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <Card title={item.title}>Card content</Card>
                </List.Item>
            )}
        />
    );
}

export default CardInfo;