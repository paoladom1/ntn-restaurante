import React from "react";
import { List, Row, Col, Card, Divider, Icon, Button } from "antd";

import notification from "../Notification/Notification";
import { AppContext } from "../../AppProvider";
import myStyles from "./AdminPanel.module.scss";
import styles from "../UserOrders/UserOrders.module.scss";

const data = ["Ordenes"];

const PanelWrapper = () => (
    <AppContext.Consumer>
        {({ user }) => <AdminPanel user={user} />}
    </AppContext.Consumer>
);

class AdminPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        };
    }

    retrieveOrders = () => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/orders`, {
            headers: {
                Authorization: `Bearer ${this.props.user.token}`
            }
        })
            .then(res => res.json())
            .then(res => {
                if (res.status === "success")
                    this.setState({ orders: res.data.orders });
            })
            .catch(error => {
                console.log(error);
            });
    };

    componentDidMount() {
        this.retrieveOrders();
    }

    handleOrderUpdate = (newState, id) => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/orders/${id}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${this.props.user.token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                status: newState
            })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);

                if (res.status === "success") {
                    this.retrieveOrders();
                    notification(
                        "Orden actualizada",
                        `La orden ${id} ha sido actualizada`,
                        "success",
                        2
                    );

                    return;
                }

                notification(
                    "Ha ocurrido un error",
                    `${res.message}`,
                    "error",
                    2
                );
            })
            .catch(error => {
                console.log(error);
                notification("Ha ocurrido un error", error, "error", 2);
            });
    };

    badgeStatus = status => {
        switch (status) {
            case "ACCEPTED":
                return "check-circle";

            case "DELIVERED":
                return "file-done";

            case "CANCELED":
                return "close-circle";

            default:
                return "loading-3-quarters";
        }
    };

    render() {
        return (
            <Row>
                <Col xs={24}>
                    <List
                        bordered
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => <List.Item>{item}</List.Item>}
                    />
                </Col>
                <Col xs={24}>
                    <List
                        bordered
                        itemLayout="horizontal"
                        dataSource={this.state.orders}
                        renderItem={item => (
                            <List.Item>
                                <Card
                                    style={{ width: "100%" }}
                                    title={
                                        <span
                                            style={{
                                                width: "100%",
                                                height: "100%"
                                            }}
                                        >
                                            <Icon
                                                type={this.badgeStatus(
                                                    item.status
                                                )}
                                                style={{ marginRight: "12px" }}
                                            />
                                            {`${item.status} - ${item.client.name}`}
                                        </span>
                                    }
                                    className={styles.card}
                                >
                                    {item.products.map((product, index) => (
                                        <div key={index}>
                                            {`${product.name} - $${Number(
                                                product.price
                                            ).toFixed(2)}`}
                                        </div>
                                    ))}
                                    <Divider />
                                    <Row className={styles.total}>
                                        <Col xs={8}>
                                            <strong>
                                                Total: $
                                                {Number(item.total).toFixed(2)}
                                            </strong>
                                        </Col>
                                        <Col
                                            xs={16}
                                            style={{ textAlign: "right" }}
                                        >
                                            <Row gutter={24}>
                                                <Col xs={24} lg={6}>
                                                    <Button
                                                        className={
                                                            myStyles.statusButton
                                                        }
                                                        onClick={() =>
                                                            this.handleOrderUpdate(
                                                                "ACCEPTED",
                                                                item._id
                                                            )
                                                        }
                                                    >
                                                        <Icon
                                                            style={{
                                                                color: "blue"
                                                            }}
                                                            type="check-circle"
                                                        />
                                                        ACEPTAR
                                                    </Button>
                                                </Col>
                                                <Col xs={24} lg={6}>
                                                    <Button
                                                        className={
                                                            myStyles.statusButton
                                                        }
                                                        onClick={() =>
                                                            this.handleOrderUpdate(
                                                                "IN PROGRESS",
                                                                item._id
                                                            )
                                                        }
                                                    >
                                                        <Icon
                                                            style={{
                                                                color: "grey"
                                                            }}
                                                            type="loading-3-quarters"
                                                        />
                                                        EN PROCESO
                                                    </Button>
                                                </Col>
                                                <Col xs={24} lg={6}>
                                                    <Button
                                                        className={
                                                            myStyles.statusButton
                                                        }
                                                        onClick={() =>
                                                            this.handleOrderUpdate(
                                                                "DELIVERED",
                                                                item._id
                                                            )
                                                        }
                                                    >
                                                        <Icon
                                                            style={{
                                                                color: "green"
                                                            }}
                                                            type="file-done"
                                                        />
                                                        ENTREGADA
                                                    </Button>
                                                </Col>
                                                <Col xs={24} lg={6}>
                                                    <Button
                                                        className={
                                                            myStyles.statusButton
                                                        }
                                                        onClick={() =>
                                                            this.handleOrderUpdate(
                                                                "CANCELED",
                                                                item._id
                                                            )
                                                        }
                                                    >
                                                        <Icon
                                                            style={{
                                                                color: "red"
                                                            }}
                                                            type="close-circle"
                                                        />
                                                        CANCELADA
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card>
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
        );
    }
}

export default PanelWrapper;
