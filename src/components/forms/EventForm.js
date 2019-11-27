import React from "react";
import styles from "./EventForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import {
    Descriptions,
    Button,
    Form,
    Input,
    DatePicker,
    Icon,
    Row,
    Col,
    Divider
} from "antd";
import { withRouter } from "react-router-dom";

import { AppContext } from "../../AppProvider";
import notification from "../Notification/Notification";
var expresionRegular1 = /^[0-9]{8}$/; //<--- con esto vamos a validar el numero

const InfoSection = () => (
    <Col
        xs={24}
        lg={14}
        styles={{ borderLeft: "1px solid white" }}
        className={styles.infoSection}
    >
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

const range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
        result.push(i);
    }
    return result;
};

const roundMoment = (date, duration, method) => {
    return moment(Math[method](+date / +duration) * +duration);
};

class FormularioNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            dui: "",
            email: "",
            phone: "",
            amount_of_people: 1,
            date: roundMoment(moment(), moment.duration(30, "minutes"), "ceil")
        };
    }

    clearFields = () => {
        this.setState({
            name: "",
            dui: "",
            email: "",
            phone: "",
            amount_of_people: 1,
            date: moment().add(1, "days")
        });
    };

    handleSubmit = (e, user) => {
        e.preventDefault();
        const { name, dui, email, phone, amount_of_people, date } = this.state;
        if (Object.keys(user).length === 0) {
            notification(
                "ERROR",
                "Debes iniciar sesión para realizar una reservación",
                "error",
                2
            );
            this.props.history.push("/signin");
            return;
        }

        if (expresionRegular1.test(phone)) {
            if (amount_of_people >= 1 && amount_of_people < 10) {
                fetch(`${process.env.REACT_APP_BACKEND_URL}/me/events`, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name,
                        dui,
                        email,
                        phone,
                        amount_of_people,
                        date
                    })
                })
                    .then(res => res.json())
                    .then(res => {
                        notification(
                            "Evento creado",
                            "Se ha creado su evento exitosamente " +
                                res.message,
                            "success",
                            2
                        );

                        this.clearFields();
                    })
                    .catch(error =>
                        notification(
                            "Ha ocurrido un error",
                            "Lo lamentamos, ha habido un error creando su evento" +
                                error.message,
                            "error",
                            2
                        )
                    );
            } else {
                notification(
                    "Ha ocurrido un error",
                    "Minimo de personas: 1",
                    "error",
                    2
                );
            }
        } else {
            notification(
                "Ha ocurrido un error",
                "Ingrese un numero telefonico valido",
                "error",
                2
            );
        }
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleDateChange = e => {
        console.log(e);
        this.setState({ date: e });
    };

    disabledDate = current => {
        // Can not select days before today and today
        return current && current < moment().endOf("day");
    };

    disabledDateTime = () => {
        return {
            disabledHours: () =>
                range(0, 12)
                    .splice(0, 8)
                    .concat(range(13, 24).splice(8, 4))
        };
    };

    render() {
        return (
            <AppContext.Consumer>
                {({ user }) => (
                    <Row className={styles.container}>
                        <Col xs={24} lg={9} className={styles.eventSection}>
                            <h2>Reservas</h2>
                            <Form
                                className={styles.eventForm}
                                onSubmit={e => this.handleSubmit(e, user)}
                            >
                                <Row className={styles.fields}>
                                    <Col xs={24}>
                                        <Form.Item
                                            label="Telefono"
                                            className={styles.field}
                                            required
                                        >
                                            <Input
                                                name="phone"
                                                value={this.state.phone}
                                                onChange={this.handleChange}
                                                className={styles.input}
                                                type="tel"
                                                vpattern="[0-9]"
                                                placeholder="########"
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24}>
                                        <Form.Item
                                            label="Cant. personas"
                                            className={styles.field}
                                            required
                                        >
                                            <Input
                                                name="amount_of_people"
                                                value={
                                                    this.state.amount_of_people
                                                }
                                                onChange={this.handleChange}
                                                className={styles.input}
                                                type="number"
                                                placeholder="#"
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24}>
                                        <Form.Item
                                            label="Fecha reserva"
                                            style={{ marginBottom: 0 }}
                                            className={styles.field}
                                            required
                                        >
                                            <Form.Item
                                                style={{
                                                    display: "inline-block",
                                                    width: "100%"
                                                }}
                                            >
                                                <DatePicker
                                                    name="date"
                                                    format="DD/MM/YYYY, hh:mm A"
                                                    onChange={
                                                        this.handleDateChange
                                                    }
                                                    value={this.state.date}
                                                    showToday={false}
                                                    disabledDate={
                                                        this.disabledDate
                                                    }
                                                    disabledTime={
                                                        this.disabledDateTime
                                                    }
                                                    showTime={{
                                                        hideDisabledOptions: true,
                                                        use12Hours: true,
                                                        minuteStep: 30,
                                                        format: "HH:mm",
                                                        defaultOpenValue: moment(
                                                            "12:00"
                                                        )
                                                    }}
                                                    style={{ width: "100%" }}
                                                    className={styles.date}
                                                />
                                            </Form.Item>
                                        </Form.Item>
                                    </Col>
                                    <Button
                                        htmlType="submit"
                                        className={styles.btn}
                                    >
                                        Reservar
                                    </Button>
                                </Row>
                            </Form>
                        </Col>
                        <Col xs={0} lg={1}>
                            <Divider
                                style={{ color: "white", height: "475px" }}
                                type="vertical"
                            />
                        </Col>
                        <InfoSection />
                    </Row>
                )}
            </AppContext.Consumer>
        );
    }
}

export default withRouter(FormularioNew);
