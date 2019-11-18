import React from "react";
import { Card, Row, Col, List,} from "antd";
import { Image, Transformation } from "cloudinary-react";
import styles from "./RestaurantInfoList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const data = [
    {
        title: "Los Planes de Renderos",
        info: "Carretera a Los Planes de Renderos Km 5 ½. Tel.: (503) 2270-0144 ",
        img: "proyecto/home/img1"
    },
    {
        title: "Lago de Coatepeque",
        info: "Calle Los Planes, Km 2, Lago de Coatepeque, El Congo, Santa Ana. Tel.: (503) 2455-9718",
        img: "proyecto/home/img2"
    },
    {
        title: "Paseo Gral. Escalon",
        info: "Paseo General Escalón, 1000 mts. arriba de Redondel Masferrer, San Salvador. Tel. 2264-0892",
        img: "  "
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
                    sm: 3,
                    md: 3,
                    lg: 3,
                    xl: 6,
                    xxl: 3
                }}
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <Card className={styles.card}>
                            <Row className={styles.cardContent}>
                                <Col className={styles.cardInfo}>
                                    <div className={styles.cardTitle}>
                                        <h2>{item.title}</h2>
                                    </div>
                                    <div className={styles.information}>
                                        <p>{item.info}</p>
                                        <Image publicId={data[0].img}
                                        className={styles.img}>
                                            <Transformation 
                                            crop="fill"
                                            fetchFormat="auto"
                                            aspectRati="16:9"/>
                                        </Image>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </List.Item>
                )}
            ></List>
        </div>
    );
};


export default ListInfo;
