import React from "react";
import { Card, List } from "antd";
import styles from "./RestaurantInfoList.module.scss";
const data = [
    {
        title: "Planes de Renderos",
        info: "Finca Santa Rosa, Calle a Planes de Renderos, San Salvador Km 5 ½. Tel.: (503) 2270-0144 ",
        img: "proyecto/home/img1"
    },
    {
        title: "Lago de Coatepeque",
        info:
            "Calle Los Planes, Km 2, Lago de Coatepeque, El Congo, Santa Ana. Tel.: (503) 2455-9718",
        img: "proyecto/home/img2"
    },
    {
        title: "Paseo Gral. Escalon",
        info:
            "Paseo Gral Escalón, 1 km. arriba de Redondel Masferrer, San Salvador. Tel. 2264-0892",
        img: "  "
    }
];

const ListInfo = () => {
    return (
        <div className={styles.container} id="locations">
            <h1>SUCURSALES</h1>
            <List
                className={styles.ls}
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 1,
                    md: 3,
                    lg: 3,
                    xl: 3,
                    xxl: 3
                }}
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                      <Card  className={styles.card} title={item.title}>
                          {item.info}
                      </Card>
                    </List.Item>
                )}
            ></List>
        </div>
    );
};


export default ListInfo;
