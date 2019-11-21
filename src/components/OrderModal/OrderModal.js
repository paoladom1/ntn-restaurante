import React from "react";
import { Modal, Button, List } from "antd";
import OrderItem from "./OrderItem/OrderItem";
import { AppContext } from "../../AppProvider";
import notification from "../Notification/Notification";

const placeOrder = (user, cart, updateCart) => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/users/${user._id}/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            products: cart.reduce((accumulator, product) => {
                return accumulator.concat([product._id]);
            }, [])
        })
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            if (res.status === "success") {
                updateCart([]);
                return res;
            }
        })
        .catch(error => console.log(error));
};

const OrderModal = ({ visible, handleCancel }) => (
    <AppContext.Consumer>
        {({ user, cart, updateCart }) => {
            let total = cart
                ? cart.reduce(
                      (accumulator, { price }) => price + accumulator,
                      0
                  )
                : 0;
            total = Number(total).toFixed(2);
            console.log(user);

            return (
                <Modal
                    visible={visible}
                    title={`Orden - Total: $${total}`}
                    onOk={handleCancel}
                    onCancel={handleCancel}
                    centered
                    footer={[
                        <Button
                            key="clear"
                            onClick={() => {
                                updateCart([]);
                            }}
                        >
                            Limpiar Carrito
                        </Button>,
                        <Button key="back" onClick={handleCancel}>
                            Regresar
                        </Button>,
                        <Button
                            key="submit"
                            type="primary"
                            onClick={e => {
                                e.preventDefault();
                                placeOrder(user, cart, updateCart);
                                handleCancel();
                                notification("Orden Ingresada", "", "success", 2)
                            }}
                        >
                            Ordenar
                        </Button>
                    ]}
                >
                    <List
                        itemLayout="horizontal"
                        dataSource={cart}
                        renderItem={(item, index) => (
                            <List.Item>
                                <OrderItem
                                    name={item.name}
                                    price={item.price}
                                    index={index}
                                />
                            </List.Item>
                        )}
                    />
                </Modal>
            );
        }}
    </AppContext.Consumer>
);

export default OrderModal;
