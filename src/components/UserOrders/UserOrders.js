import React from "react";
import { AppContext } from "./../../AppProvider";
import { List, Card, Divider } from "antd";
import styles from "./UserOrders.module.scss";

class UserOrders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        };
    }

    getOrders = user => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/users/${user._id}/orders`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res.data);
                const { orders } = res.data;
                if (res.status === "success") {
                    this.setState({
                        orders
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    componentDidMount() {
        const { user } = this.props;

        this.getOrders(user);
    }

    render() {
        const { orders } = this.state;
        console.log(orders);

        return (
            <List
                itemLayout="horizontal"
                dataSource={orders}
                renderItem={item => (
                    <List.Item>
                        <Card title={item.status} className={styles.card}>
                            {item.products.map((product, index) => (
                                <div key={index}>
                                    {`${product.name} - $${Number(
                                        product.price
                                    ).toFixed(2)}`}
                                </div>
                            ))}
                            <Divider />
                            <div className={styles.total}>
                                <div>
                                    <strong>
                                        Subtotal: $
                                        {Number(item.subtotal).toFixed(2)}
                                    </strong>
                                </div>
                                <div>
                                    <strong>
                                        Total: ${Number(item.total).toFixed(2)}
                                    </strong>
                                </div>
                            </div>
                        </Card>
                    </List.Item>
                )}
            />
        );
    }
}

const ContextWrapper = () => (
    <AppContext.Consumer>
        {({ user }) => <UserOrders user={user} />}
    </AppContext.Consumer>
);

export default ContextWrapper;
