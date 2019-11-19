import React from "react";
import { Card, Row, Col, Icon } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image, Transformation } from "cloudinary-react";

import styles from "./CustomMenu.module.scss";

const foodList = [
    {
        name: "pizza",
        description: "pizza con pepperoni",
        price: "$12",
        img: "/samples/food/food"
    },
    {
        name: "comidita",
        description: "platanito",
        price: "$20"
    },
    {
        name: "frijolitos",
        description: "frijolitos fritos",
        price: "$5"
    }
];

class CustomMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foodList: []
        };
    }

    componentDidMount() {
        fetch(`http://localhost:5000/api/foods/${this.props.category}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({ foodList: res.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    addToOrder = index => {
        let cart = localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : [];
        cart = cart.concat([this.state.foodList[index]]);

        localStorage.setItem("cart", JSON.stringify(cart));
    };

    handleClick = name => {
        this.addToOrder(name);
    };

    render() {
        return (
            <Card className={styles.card}>
                <Row className={styles.cardContent}>
                    <Col className={styles.cardMenu} xs={24} md={13}>
                        <div className={styles.cardTitle}>
                            <FontAwesomeIcon
                                className={styles.icon}
                                icon="utensils"
                            />
                            <h2 className={styles.title}>{this.props.name}</h2>
                        </div>
                        <div className={styles.listContent}>
                            {this.state.foodList.map((food, index) => {
                                return (
                                    <div key={food.name}>
                                        <Row>
                                            <Col xs={18} md={21}>
                                                <h3 className={styles.foodName}>
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
                                                <p>{food.price}</p>
                                            </Col>
                                            <Col xs={2} md={1}>
                                                <Icon
                                                    className={styles.icon}
                                                    type="plus-circle"
                                                    theme="filled"
                                                    onClick={() => {
                                                        this.handleClick(index);
                                                        console.log(
                                                            localStorage.cart
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
                    <Col xs={24} md={11}>
                        <div>
                            <Image
                                publicId={foodList[0].img}
                                className={styles.img}
                            >
                                <Transformation
                                    crop="fill"
                                    fetchFormat="auto"
                                />
                            </Image>
                        </div>
                    </Col>
                </Row>
            </Card>
        );
    }
}

export default CustomMenu;
