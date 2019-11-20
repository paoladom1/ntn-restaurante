import React from "react";
import { Button } from "antd";

const removeFromOrder = index => {
    let products = JSON.parse(localStorage.getItem("cart"));
    products.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(products));
};

const OrderItem = ({ name, price, index }) => {
    return (
        <div className="card" style={{ marginBottom: "10px" }}>
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <h5 className="card-text">
                    <small>precio: </small>${price}
                </h5>
                <Button
                    className="btn btn-sm btn-warning float-right"
                    onClick={() => removeFromOrder(index)}
                >
                    Remove from cart
                </Button>
            </div>
        </div>
    );
};

export default OrderItem;
