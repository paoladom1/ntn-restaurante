import React from "react";
import { Row, Col, Icon, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import notification from "./../../Notification/Notification";
import styles from "./CustomMenu.module.scss";
import { AppContext } from "../../../AppProvider";
import { withRouter } from "react-router-dom";

class CustomMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foodList: []
        };
    }

    componentDidMount() {
        fetch(
            `${process.env.REACT_APP_BACKEND_URL}/foods/${this.props.category}`,
            {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            }
        )
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({ foodList: res.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const { history, location } = this.props;
        return (
            <AppContext.Consumer>
                {({ cart, updateCart }) => (
                    <div className={styles.wrapper}>
                        <Row className={styles.cardContent}>
                            <div>
                                <Button
                                    className={styles.goBack}
                                    onClick={() => {
                                        console.log(location);
                                        history.push("/menu");
                                    }}
                                >
                                    <FontAwesomeIcon
                                        icon="arrow-left"
                                        className={styles.Icon}
                                    />
                                </Button>
                            </div>
                            <Col
                                className={styles.cardMenu}
                                xs={24}
                                md={24}
                                lg={24}
                            >
                                <div className={styles.cardTitle}>
                                    <FontAwesomeIcon
                                        className={styles.icon}
                                        icon="utensils"
                                    />
                                    <h2 className={styles.title}>
                                        {this.props.name}
                                    </h2>
                                </div>
                                <div className={styles.listContent}>
                                    {this.state.foodList.map((food, index) => {
                                        return (
                                            <div key={food.name}>
                                                <Row gutter={16}>
                                                    <Col xs={18} md={21}>
                                                        <h3
                                                            className={
                                                                styles.foodName
                                                            }
                                                        >
                                                            {food.name}
                                                        </h3>
                                                        <p
                                                            className={
                                                                styles.foodDescription
                                                            }
                                                        >
                                                            {food.description}
                                                        </p>
                                                    </Col>
                                                    <Col xs={4} md={2}>
                                                        <span
                                                            className={
                                                                styles.foodPrice
                                                            }
                                                        >
                                                            $
                                                            {Number(
                                                                food.price
                                                            ).toFixed(2)}
                                                        </span>
                                                    </Col>
                                                    <Col
                                                        xs={2}
                                                        md={1}
                                                        className={
                                                            styles.addToCart
                                                        }
                                                    >
                                                        <Icon
                                                            className={
                                                                styles.icon
                                                            }
                                                            type="plus-circle"
                                                            theme="filled"
                                                            onClick={() => {
                                                                updateCart(
                                                                    cart.concat(
                                                                        [food]
                                                                    )
                                                                );

                                                                notification(
                                                                    "Item agregado",
                                                                    food.description,
                                                                    "success",
                                                                    2
                                                                );
                                                            }}
                                                        />
                                                    </Col>
                                                </Row>
                                            </div>
                                        );
                                    })}
                                </div>
                            </Col>
                        </Row>
                    </div>
                )}
            </AppContext.Consumer>
        );
    }
}

export default withRouter(CustomMenu);
