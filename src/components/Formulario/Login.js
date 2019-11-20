import React from "react";
import styles from "./Login.module.scss";
import { Icon, Form, Input, Button, Checkbox } from 'antd';
import { Link, useHistory } from "react-router-dom"

const Login = () => {
    const history = useHistory();
    console.log(history);
    return (
        <div className={styles.over}>
            <div className={styles.pop}>
                <Button className={styles.logo} onClick={history.goBack}>
                    <div className={styles.icon}>
                        <Icon type="close-circle" theme="filled"/>
                    </div>
                </Button>
                <h3>Login</h3>
                <Form className={styles.formPrincipal}>
                    <div className={styles.fields}>
                        <Form.Item label="Username" className={styles.field}>
                            <Input type="text" placeholder="Username" />
                        </Form.Item>
                        <Form.Item label="Password" className={styles.field}>
                            <Input type="text" placeholder="Password" />
                        </Form.Item>
                        <Form.Item  className={styles.check}>
                                <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                    </div>
                    <div className={styles.button}>
                        <Button type="primary" htmlType="submit" className={styles.btn}>
                            <strong>Login</strong>  
                        </Button>
                       <Link className={styles.Regist} to="/register">
                        <Button type="secundary" htmlType="submit" className={styles.register}>
                            Register now!
                        </Button>
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Login;
