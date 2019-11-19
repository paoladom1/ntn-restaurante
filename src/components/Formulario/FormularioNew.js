import React from "react";
import styles from "./FormularioRest.module.scss"
import { Descriptions, Button, Form, Input, DatePicker, TimePicker, Select, Cascader, InputNumber, Icon } from 'antd';
import renderEmpty from "antd/lib/config-provider/renderEmpty";

const { Option } = Select;

const FormularioNew = () => {
    return (
        <section className={styles.content}>
            <div className={styles.inner}>
                <div className={styles.info}>
                    <section>
                        <h2>Reservas</h2>
                        <Form className={styles.formPrincipal}>
                            <div className={styles.fields}>
                                <Form.Item label="Nombre" className={styles.field}>
                                    <Input type="text" placeholder="Primer Nombre" />
                                </Form.Item>
                                <Form.Item label="Apellido" className={styles.field}>
                                    <Input type="text" placeholder="Segundo Apellido" />
                                </Form.Item>
                                <Form.Item label="Email" className={styles.field}>
                                    <Input type="email" placeholder="example@example.com" />
                                </Form.Item>
                                <Form.Item label="Telefono" className={styles.field}>
                                    <Input type="tel" vpattern="[0-9]" placeholder="####-####" />
                                </Form.Item>
                                <Form.Item label="Cantidad de personas" className={styles.field}>
                                    <Input type="number" placeholder="#" />
                                </Form.Item>
                                <Form.Item label="Zona" className={styles.field}>
                                    <Select defaultValue="1" className={styles.selector}>
                                        <Option value="1">Interna</Option>
                                        <Option value="2">Externa</Option>
                                        <Option value="3">Terraza</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item label="Fecha reserva" style={{ marginBottom: 0 }} className={styles.field}>
                                    <Form.Item
                                        style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
                                        <DatePicker />
                                    </Form.Item>
                                </Form.Item>
                                <Form.Item label="Tematica" className={styles.field}>
                                    <Input type="text" />
                                </Form.Item>
                            </div>
                            <div className={styles.figth}>
                                <Button type="primary" htmlType="submit" className={styles.btn}>
                                    Submit
                                 </Button>
                            </div>
                        </Form>
                    </section>
                </div>
                <div className={styles.information}>
                    <div className={styles.first}>
                        <Icon type="mail" theme="filled" className={styles.icon} />
                        <Descriptions title="Contact us">
                            <Descriptions.Item label="Email">
                                <a href="#">ntnrestaurant@gmail.com</a>
                            </Descriptions.Item>
                        </Descriptions>
                    </div>
                    <div className={styles.second}>
                        <Icon type="home" theme="filled" className={styles.icon} />
                        <Descriptions title="Address">
                            <Descriptions.Item>
                                <span className={styles.text}>Final Paseo General Escalón, <br/>
                                 1000 mts. arriba de Redondel Masferrer, <br/>
                                 Colonia Escalón, San Salvador.
                                </span>
                            </Descriptions.Item>
                        </Descriptions>
                    </div>
                    <div className={styles.third}>
                        <Icon type="phone" theme="filled" className={styles.icon} />
                        <Descriptions title="Phone number">
                            <Descriptions.Item>
                                <span>2210-6600</span>
                            </Descriptions.Item>
                        </Descriptions>
                    </div>
                    <div className={styles.last}>
                        <Descriptions title="Social Links">
                            <Descriptions.Item>
                                <Icon type="phone" theme="filled" className={styles.icon} />
                                <Icon type="youtube" theme="filled" className={styles.icon} />
                                <Icon type="facebook" theme="filled" className={styles.icon} />
                                <Icon type="twitter-circle" theme="filled" className={styles.icon} />
                            </Descriptions.Item>
                        </Descriptions>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FormularioNew;