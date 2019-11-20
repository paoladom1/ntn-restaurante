import React from "react";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AppContext } from "../../../AppProvider";

const OrderItem = ({ name, price, index }) => (
    <AppContext.Consumer>
        {({ cart, updateCart }) => (
            <div className="card" style={{ marginBottom: "10px" }}>
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <h5 className="card-text">
                        <small>precio: </small>${price}
                    </h5>
                    <Button
                        className="btn btn-sm btn-warning float-right"
                        onClick={() => updateCart(cart.filter((_, i) => i !== index))}
                    >
                        <FontAwesomeIcon icon="minus-circle" />
                    </Button>
                </div>
            </div>
        )}
    </AppContext.Consumer>
);

export default OrderItem;
