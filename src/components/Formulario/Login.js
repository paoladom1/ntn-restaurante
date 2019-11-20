import React from "react";
import styles from "./Login.module.scss";
import { Card, Form, Input, Button } from "antd";
import { Link, withRouter } from "react-router-dom";
import { AppContext } from "../../AppProvider";
import notification from "../Notification/Notification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        e.preventDefault();

        const { email, password } = this.state;

        return fetch(`${process.env.REACT_APP_BACKEND_URL}/users/signin`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(res => res.json())
            .catch(error => console.log(error));
    };

    render() {
        const { history, location } = this.props;

        return (
            <AppContext.Consumer>
                {({ user, updateUser }) => (
                    <div className={styles.over}>
                        <Card className={styles.pop}>
                            <Button
                                className={styles.closeBtn}
                                onClick={() => {
                                    console.log(location);
                                    history.push("/");
                                }}
                            >
                                <div className={styles.icon}>
                                    <FontAwesomeIcon icon="arrow-left" />
                                </div>
                            </Button>
                            <h3>Login</h3>
                            <Form
                                className={styles.formPrincipal}
                                onSubmit={e => {
                                    this.handleSubmit(e).then(res => {
                                        if (res.status === "success") {
                                            updateUser({
                                                ...res.data.user,
                                                token: res.data.token
                                            });
                                            history.push("/menu");
                                        } else {
                                            notification(
                                                "Usuario no valido",
                                                "Las credenciales dadas no son correctas",
                                                "error"
                                            );
                                        }
                                    });
                                }}
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
                                <div className={styles.btn}>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        className={styles.btn}
                                    >
                                        <strong>Login</strong>
                                    </Button>
                                    <Link
                                        className={styles.Regist}
                                        to="/signup"
                                    >
                                        <Button
                                            type="secundary"
                                            htmlType="submit"
                                            className={styles.registerBtn}
                                        >
                                            Registrate!
                                        </Button>
                                    </Link>
                                </div>
                            </Form>
                        </Card>
                    </div>
                )}
            </AppContext.Consumer>
        );
    }
}

export default withRouter(LoginForm);
