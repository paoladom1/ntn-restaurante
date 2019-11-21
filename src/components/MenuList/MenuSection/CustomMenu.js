import React from "react";
import { Card, Row, Col, Icon } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image, Transformation } from "cloudinary-react";

import notification from "./../../Notification/Notification";
import styles from "./CustomMenu.module.scss";
import { AppContext } from "../../../AppProvider";

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
        return (
            <AppContext.Consumer>
                {({ cart, updateCart }) => (
                    <Card className={styles.card}>
                        <Row className={styles.cardContent}>
                            <Col
                                className={styles.cardMenu}
                                xs={24}
                                md={24}
                                lg={13}
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
                                                            ${Number(food.price).toFixed(2)}
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
                                                                    3
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
                            <Col xs={24} md={24} lg={11}>
                                <div>
                                    <Image
                                        publicId={this.props.image}
                                        className={styles.img}
                                    >
                                        <Transformation
                                            crop="fill"
                                            quality="80"
                                            fetchFormat="auto"
                                        />
                                    </Image>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                )}
            </AppContext.Consumer>
        );
    }
}

export default CustomMenu;