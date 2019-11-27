import React from 'react';
import { Modal, Button, List } from 'antd';
import OrderItem from './OrderItem/OrderItem';
import { AppContext } from '../../AppProvider';
import notification from '../Notification/Notification';
import { withRouter } from 'react-router-dom';
import styles from './Order.module.scss';

const placeOrder = (user, cart, updateCart) => {
    return fetch(`${process.env.REACT_APP_BACKEND_URL}/me/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
            products: cart.reduce((accumulator, product) => {
                return accumulator.concat([product._id]);
            }, []),
        }),
    })
        .then(res => res.json())
        .then(res => {
            if (res.status === 'success') {
                updateCart([]);
            }

            return res;
        })
        .catch(error => {
            console.log(error);
            notification('Ha ocurrido un error', error.toString(), 'error', 3);
            return error;
        });
};

const OrderModal = ({ visible, handleCancel, history }) => (
    <AppContext.Consumer>
        {({ user, cart, updateCart }) => {
            let total = cart
                ? cart.reduce(
                      (accumulator, { price }) => price + accumulator,
                      0
                  )
                : 0;
            total = Number(total).toFixed(2);

            return (
                <Modal
                    className={styles.modal}
                    visible={visible}
                    title={`Orden - Total: $${total}`}
                    onOk={handleCancel}
                    onCancel={handleCancel}
                    centered
                    footer={[
                        <div className={styles.footer}>
                            <Button
                                className={styles.clearBtn}
                                key="clear"
                                onClick={() => {
                                    updateCart([]);
                                }}
                            >
                                Limpiar Carrito
                            </Button>
                            ,
                            <Button
                                className={styles.submitBtn}
                                key="submit"
                                type="primary"
                                onClick={e => {
                                    e.preventDefault();

                                    if (cart.length === 0)
                                        notification(
                                            'ERROR',
                                            'Necesitas agregar al menos un producto al carrito',
                                            'error',
                                            2
                                        );
                                    else if (Object.keys(user).length === 0) {
                                        notification(
                                            'ERROR',
                                            'necesitas estar loggeado para realizar una orden',
                                            'error',
                                            3
                                        );
                                        history.push('/signin');
                                    } else {
                                        placeOrder(user, cart, updateCart).then(
                                            res => {
                                                if (res.status === 'success')
                                                    notification(
                                                        'Agregado',
                                                        res.message,
                                                        'success',
                                                        2
                                                    );
                                                else
                                                    notification(
                                                        res.status,
                                                        res.message,
                                                        'error',
                                                        3
                                                    );
                                            }
                                        );
                                    }
                                    handleCancel();
                                }}
                            >
                                Ordenar
                            </Button>
                        </div>,
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

export default withRouter(OrderModal);
