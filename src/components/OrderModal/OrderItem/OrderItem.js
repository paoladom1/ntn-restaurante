import React from 'react';
import { Button, Row, Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './OrderItem.module.scss';

import { AppContext } from '../../../AppProvider';

const OrderItem = ({ name, price, index }) => (
    <AppContext.Consumer>
        {({ cart, updateCart }) => (
            <div className={styles.card} style={{ marginBottom: '10px' }}>
                <Row gutter={24} className={styles.cardBody}>
                    <Col xs={21} md={22}>
                        <h4 className={styles.cardTitle}>{name}</h4>
                        <h5 className={styles.cardText}>
                            <small>precio: </small>${Number(price).toFixed(2)}
                        </h5>
                    </Col>
                    <Col xs={3} md={2}>
                        <Button
                            className={styles.rmBtn}
                            onClick={() =>
                                updateCart(cart.filter((_, i) => i !== index))
                            }
                        >
                            <FontAwesomeIcon icon="minus-circle" />
                        </Button>
                    </Col>
                </Row>
            </div>
        )}
    </AppContext.Consumer>
);

export default OrderItem;
