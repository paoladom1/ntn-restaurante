import React from "react";
import { Modal, Button, List } from "antd";
import OrderItem from "./OrderItem/OrderItem";
import { AppContext } from "../../AppProvider";

const OrderModal = ({ visible, handleCancel }) => (
    <AppContext.Consumer>
        {({ cart, updateCart }) => {
            console.log(cart);
            let total = cart ? cart.reduce((accumulator, { price }) => price + accumulator, 0) : 0;
            total = Number(total).toFixed(2);

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
                            onClick={handleCancel}
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
