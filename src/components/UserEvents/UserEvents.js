import React from "react";
import { List, Card, Divider } from "antd";
import moment from "moment";

import { AppContext } from "./../../AppProvider";
import styles from "../UserOrders/UserOrders.module.scss";

class UserEvents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
    }

    getEvents = user => {
        console.log(user);
        fetch(`${process.env.REACT_APP_BACKEND_URL}/me/events`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res.data);
                const { events } = res.data;
                if (res.status === "success") {
                    this.setState({
                        events
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    componentDidMount() {
        const { user } = this.props;

        this.getEvents(user);
    }

    render() {
        const { events } = this.state;
        console.log(events);

        return (
            <div className={styles.list}>
                <h2>TUS EVENTOS</h2>
                <List
                    itemLayout="horizontal"
                    dataSource={events}
                    renderItem={item => (
                        <List.Item>
                            <Card title="Evento" className={styles.card}>
                                <div>
                                    {`Reserva a nombre de: ${item.client.name}`}
                                </div>
                                <div>
                                    {`Numero de telefono de contacto: ${item.phone}`}
                                </div>
                                <div>
                                    {`Cantidad de personas: ${item.amount_of_people}`}
                                </div>

                                <Divider />
                                <div className={styles.total}>
                                    <strong>
                                        {`Fecha de reserva: ${moment(
                                            item.date
                                        ).format("DD MMM, YYYY, hh:mm A")}`}
                                    </strong>
                                </div>
                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

const ContextWrapper = () => (
    <AppContext.Consumer>
        {({ user }) => <UserEvents user={user} />}
    </AppContext.Consumer>
);

export default ContextWrapper;
