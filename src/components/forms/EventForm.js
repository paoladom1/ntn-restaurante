import React from "react";
import styles from "./EventForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Descriptions,
    Button,
    Form,
    Input,
    DatePicker,
    TimePicker,
    Icon,
    Row,
    Col
} from "antd";

const InfoSection = () => (
    <Col xs={24} lg={12} className={styles.infoSection}>
        <div className={styles.subsection}>
            <Icon type="mail" theme="filled" className={styles.icon} />
            <Descriptions label="Contact us" className={styles.label}>
                <Descriptions.Item className={styles.text}>
                    <a href="mailto:reservaciones@ntnrestaurante.com?subject=Reservacion">
                        ntnrestaurant@gmail.com
                    </a>
                </Descriptions.Item>
            </Descriptions>
        </div>
        <div className={styles.subsection}>
            <Icon type="home" theme="filled" className={styles.icon} />
            <Descriptions label="Address" className={styles.label}>
                <Descriptions.Item className={styles.text}>
                    <span>
                        Final Paseo General Escalón, <br />
                        1000 mts. arriba de Redondel Masferrer, <br />
                        Colonia Escalón, San Salvador.
                    </span>
                </Descriptions.Item>
            </Descriptions>
        </div>
        <div className={styles.subsection}>
            <Icon type="phone" theme="filled" className={styles.icon} />
            <Descriptions label="Phone number" className={styles.label}>
                <Descriptions.Item className={styles.text}>
                    <span>2210-6600</span>
                </Descriptions.Item>
            </Descriptions>
        </div>
        <div className={`${styles.subsection} ${styles.last}`}>
            <Descriptions label="Social Links" className={styles.label}>
                <Descriptions.Item>
                    <h3>Siguenos</h3>
                    <FontAwesomeIcon
                        icon={["fab", "facebook"]}
                        className={styles.icon}
                    />
                    <FontAwesomeIcon
                        icon={["fab", "twitter"]}
                        className={styles.icon}
                    />
                    <FontAwesomeIcon
                        icon={["fab", "instagram"]}
                        className={styles.icon}
                    />
                </Descriptions.Item>
            </Descriptions>
        </div>
    </Col>
);

const FormularioNew = () => {
    return (
        <Row className={styles.container}>
            <Col xs={24} lg={12} className={styles.eventSection}>
                <h2>Reservas</h2>
                <Form className={styles.eventForm}>
                    <Row gutter={16} className={styles.fields}>
                        <Col xs={24} lg={12}>
                            <Form.Item label="Nombre Completo" className={styles.field}>
                                <Input
                                    className={styles.input}
                                    type="text"
                                    placeholder="Nombre Completo"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={12}>
                            <Form.Item
                                label="DUI"
                                className={styles.field}
                            >
                                <Input
                                    className={styles.input}
                                    type="text"
                                    placeholder="00000000-0"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={12}>
                            <Form.Item label="Email" className={styles.field}>
                                <Input
                                    className={styles.input}
                                    type="email"
                                    placeholder="example@example.com"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={12}>
                            <Form.Item
                                label="Telefono"
                                className={styles.field}
                            >
                                <Input
                                    className={styles.input}
                                    type="tel"
                                    vpattern="[0-9]"
                                    placeholder="####-####"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={12}>
                            <Form.Item
                                label="Cant. personas"
                                className={styles.field}
                            >
                                <Input
                                    className={styles.input}
                                    type="number"
                                    placeholder="#"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={12}>
                            <Form.Item
                                label="Fecha reserva"
                                style={{ marginBottom: 0 }}
                                className={styles.field}
                            >
                                <Form.Item
                                    style={{
                                        display: "inline-block",
                                        width: "100%"
                                    }}
                                >
                                    <DatePicker
                                        showTime
                                        style={{ width: "100%" }}
                                        className={styles.date}
                                    />
                                </Form.Item>
                            </Form.Item>
                        </Col>
                        <Button htmlType="submit" className={styles.btn}>
                            Reservar
                        </Button>
                    </Row>
                </Form>
            </Col>

            <InfoSection />
        </Row>
    );
};

export default FormularioNew;
