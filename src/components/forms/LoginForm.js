import React from 'react';
import styles from './LoginForm.module.scss';
import { Card, Form, Input, Button } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { AppContext } from '../../AppProvider';
import notification from '../Notification/Notification';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        const { email, password } = this.state;

        return fetch(`${process.env.REACT_APP_BACKEND_URL}/users/signin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then(res => res.json())
            .catch(error => console.log(error));
    };

    render() {
        const { history, location } = this.props;

        return (
            <AppContext.Consumer>
                {({ updateUser }) => (
                    <div className={styles.wrapper}>
                        <Card className={styles.card}>
                            <Button
                                className={styles.goBack}
                                onClick={() => {
                                    console.log(location);
                                    history.push('/');
                                }}
                            >
                                <FontAwesomeIcon icon="arrow-left" />
                            </Button>
                            <h3>Inicia Sesión</h3>
                            <p>Inicia sesión para realizar una orden</p>
                            <Form
                                className={styles.form}
                                onSubmit={e => {
                                    this.handleSubmit(e).then(res => {
                                        if (res.status === 'success') {
                                            updateUser({
                                                ...res.data.user,
                                                token: res.data.token,
                                            });
                                            localStorage.setItem(
                                                'ntnusertoken',
                                                res.data.token
                                            );
                                            history.push('/');
                                        } else {
                                            notification(
                                                'Usuario no valido',
                                                'Las credenciales dadas no son correctas',
                                                'error'
                                            );
                                        }
                                    });
                                }}
                            >
                                <Form.Item
                                    label="Email"
                                    className={styles.label}
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
                                    className={styles.label}
                                >
                                    <Input
                                        type="password"
                                        placeholder="Password"
                                        onChange={this.handleChange}
                                        value={this.state.password}
                                        name="password"
                                    />
                                </Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className={styles.loginBtn}
                                >
                                    <strong>Login</strong>
                                </Button>
                                <span className={styles.text}>
                                    {' '}
                                    Aún no tienes una cuenta?{' '}
                                </span>
                                <Link
                                    className={styles.registerBtn}
                                    to="/signup"
                                >
                                    Registrate!
                                </Link>
                            </Form>
                        </Card>
                    </div>
                )}
            </AppContext.Consumer>
        );
    }
}

export default withRouter(LoginForm);
