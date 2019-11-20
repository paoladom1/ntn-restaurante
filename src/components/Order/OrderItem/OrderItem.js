import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu, Button } from "antd";
import styles from "./Order.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const OrderItem = () => {
    return (
        <div className="card" style={{ marginBottom: "10px" }}>
            <div className="card-body">
                <h4 className="card-title">{foodList.name}</h4>
                <h5 className="card-text">
                    <small>price: </small>${FoodList.price}
                </h5>
                <span className="card-text text-success">
                    <small>Quantity: </small>
                    {product.qty}
                </span>
                <button
                    className="btn btn-sm btn-warning float-right"
                    onClick={() => this.props.remove(product)}
                >
                    Remove from cart
                </button>
            </div>
        </div>
    );
};

export default OrderItem;
