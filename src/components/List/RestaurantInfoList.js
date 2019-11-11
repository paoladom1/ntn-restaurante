import React from "react";
import { List, Card } from "antd";
import CardInfo from "../Card/CardInfo";
import styles from "./RestaurantInfoList.module.scss";

const data = [
    {
        title: "Santa Tecla"
    },
    {
        title: "San Salvador"
    },
    {
        title: "Santa Ana"
    }
];

const ListInfo = () => {
    return (
        <div className={styles.inner}>
            <h1>SUCURSALES</h1>
            <List
                className={styles.ls}
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 6,
                    xxl: 3
                }}
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <Card className={styles.cardi} title={item.title}>
                            Card content
                        </Card>
                    </List.Item>
                )}
            ></List>
        </div>
    );
};

export default ListInfo;
