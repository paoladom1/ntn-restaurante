import React from "react";
import styles from "./Register.module.scss";
import { Icon, Form, Input, Button, Checkbox } from "antd";
import { Link, withRouter } from "react-router-dom";

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            dui: "",
            email: "",
            password: ""
        };
    }

    handleChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    };
  handleSubmit = e => {
       
       const { name, dui, email, password } = this.state;
       e.preventDefault();

       fetch(`${process.env.REACT_APP_BACKEND_URL}/users/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
                name,
                dui,
                email,
                password
            })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
            })
            .catch(error => 
                console.log(error));
    };

    render() {
        const { history } = this.props;
        
        return (
            <div className={styles.over}>
            <div className={styles.pop}>
                <Button className={styles.logo} onClick={history.goBack}>
                    <div className={styles.icon}>
                        <Icon type="close-circle" theme="filled" />
                    </div>
                </Button>
                <h3>SUSCRIBETE</h3>
                <Form className={styles.formPrincipal}>
                    <div className={styles.fields}>
                        <Form.Item label="Nombre Completo" className={styles.field}>
                            <Input type="text" placeholder="Nombre Completo" />
                        </Form.Item>
                        <Form.Item label="Email" className={styles.field}>
                            <Input type="email" placeholder="example@example.com" />
                        </Form.Item>
                        <Form.Item label="Dui" className={styles.field}>
                            <Input type="Dui" placeholder="12345678-9" />
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
                        <Button type="primary" htmlType="submit" className={styles.btnSubmit}>
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
        );
    }
}

export default withRouter(RegisterForm);

