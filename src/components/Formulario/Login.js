import React from "react";
import styles from "./Login.module.scss";
import { Icon, Form, Input, Button, Checkbox } from "antd";
import { Link, withRouter } from "react-router-dom";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        const { email, password } = this.state;
        e.preventDefault();

        fetch(`${process.env.REACT_APP_BACKEND_URL}/users/signin`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => console.log(error));
    };

    render() {
        const { history } = this.props;
        
        return (
            <div className={styles.over}>
                <div className={styles.pop}>
                    <Button className={styles.logo} onClick={() => history.push('/')}>
                        <div className={styles.icon}>
                            <Icon type="close-circle" theme="filled" />
                        </div>
                    </Button>
                    <h3>Login</h3>
                    <Form
                        className={styles.formPrincipal}
                        onSubmit={this.handleSubmit}
                    >
                        <div className={styles.fields}>
                            <Form.Item
                                label="Email"
                                className={styles.field}
                            >
                                <Input
                                    type="text"
                                    placeholder="Email"
                                    onChange={this.handleChange}
                                    value={this.state.email}
                                    name="email"
                                />
                            </Form.Item>
                            <Form.Item
                                label="Password"
                                className={styles.field}
                            >
                                <Input
                                    type="password"
                                    placeholder="Password"
                                    onChange={this.handleChange}
                                    value={this.state.password}
                                    name="password"
                                />
                            </Form.Item>
                        </div>
                        <div className={styles.button}>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className={styles.btn}
                            >
                                <strong>Login</strong>
                            </Button>
                            <Link className={styles.Regist} to="/register">
                                <Button
                                    type="secundary"
                                    htmlType="submit"
                                    className={styles.register}
                                >
                                    Register now!
                                </Button>
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

export default withRouter(LoginForm);
