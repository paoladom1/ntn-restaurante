import React from "react";
import { Modal, Button } from "antd";

class OrderModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            total: 0
        };
    }

 /*   componentDidMount() {
        let order = localStorage.getItem("order");
        if (!order) return;
        getOrderProducts(order).then(products => {
            let total = 0;
            for (var i = 0; i < products.length; i++) {
                total += products[i].price * products[i].qty;
            }

            this.setState({ products, total });
        });
    }
*/
    removeFromOrder = product => {
        let products = this.state.products.filter(
            item => item.id !== product.id
        );
        let order = JSON.parse(localStorage.getItem("order"));
        delete order[product.id.toString()];
        localStorage.setItem("order", JSON.stringify(order));
        let total = this.state.total - product.qty * product.price;
        this.setState({ products, total });
    };

    clearCart = () => {
        localStorage.removeItem("order");
        this.setState({ products: [] });
    };

    render() {
        return (
            <Modal
                visible={this.props.visible}
                title="Orden"
                onOk={this.props.handleCancel}
                onCancel={this.props.handleCancel}
                footer={[
                    <Button key="back" onClick={this.props.handleCancel}>
                        Return
                    </Button>,
                    <Button
                        key="submit"
                        type="primary"
                        onClick={this.props.handleCancel}
                    >
                        Submit
                    </Button>
                ]}
            >
                <span>1</span>
                <span>2</span>
            </Modal>
        );
    }
}

export default OrderModal;
