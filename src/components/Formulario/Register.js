import React from "react";
import styles from "./Register.module.scss";
import { Icon, Form, Input, Button } from 'antd';
import { Link } from "react-router-dom";
const Register = () => {
    return (
        <div className={styles.over}>
            <div className={styles.pop}>
                <Link className={styles.logo} to="/home">
                    <div className={styles.icon}>
                        <Icon type="close-circle" theme="filled" />
                    </div>
                </Link>
                <h3>SUSCRIBETE</h3>
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
                        <Form.Item label="Password" className={styles.field}>
                            <Input type="Password" placeholder="Password" />
                        </Form.Item>
                        <Form.Item label="Confirm Password" className={styles.field}>
                            <Input type="Password" placeholder="Confirm Password" />
                        </Form.Item>
                    </div>
                    <div className={styles.btn}>
                     <Link className={styles.button} to="/">
                    <Button type="primary" htmlType="cancel" className={styles.btn1}>
                            Cancel
                        </Button>
                        </Link>
                        <Button type="primary" htmlType="submit" className={styles.btn2}>
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Register;
