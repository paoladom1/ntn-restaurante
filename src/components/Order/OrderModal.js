import React from "react";
import { Modal, Button, List } from "antd";
import OrderItem from "./OrderItem/OrderItem";

const clearCart = () => {
    localStorage.setItem("cart", JSON.stringify([]));
};

const OrderModal = ({ visible, handleCancel }) => {
    let products = JSON.parse(localStorage.getItem("cart"));
    let total = products.reduce((acumulator, { price }) => price + acumulator, 0);

    return (
        <Modal
            visible={visible}
            title={`Orden - Total: $${total}`}
            onOk={handleCancel}
            onCancel={handleCancel}
            centered
            footer={[
                <Button key="clear" onClick={() => {
                    clearCart();
                    products = [];
                }}>
                    Limpiar Carrito
                </Button>,
                <Button key="back" onClick={handleCancel}>
                    Regresar
                </Button>,
                <Button key="submit" type="primary" onClick={handleCancel}>
                    Ordenar
                </Button>,
            ]}
        >
            <List
                itemLayout="horizontal"
                dataSource={products}
                renderItem={item => (
                    <List.Item>
                        <OrderItem name={item.name} price={item.price} />
                    </List.Item>
                )}
            />
        </Modal>
    );
};

export default OrderModal;
