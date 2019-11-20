import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu, Button, Icon } from "antd";
import styles from "./NavMenu.module.scss";
import OrderModal from "../Order/OrderModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NavMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
            currentPage: "/",
            modalVisible: false
        };
    }

    componentDidMount() {
        this.setState({ currentPage: this.props.location.pathname });
    }

    toggle = () => {
        this.setState({ collapsed: !this.state.collapsed });
    };

    showModal = () => {
        this.setState({
            modalVisible: true
        });
    };

    handleCancelModal = () => {
        this.setState({
            modalVisible: false
        });
    };

    render() {
        return (
            <div>
                <Button
                    className={styles.shoppingCart}
                    onClick={this.showModal}
                >
                    <FontAwesomeIcon
                        className={styles.shoppingCartIcon}
                        icon="shopping-cart"
                    />
                </Button>
                <OrderModal
                    handleCancel={this.handleCancelModal}
                    showModal={this.showModal}
                    visible={this.state.modalVisible}
                />
                <Button
                    className={styles.menuBtn}
                    onClick={this.toggle}
                    style={{ marginBottom: 16 }}
                >
                    <Icon type="menu" className={styles.menuIcon}/>
                </Button>
                <div
                    className={`${
                        this.state.collapsed ? styles.hidden : styles.shown
                    } ${styles.overlay}`}
                >
                    <Button
                        className={styles.closebtn}
                        onClick={this.toggle}
                        shape="circle"
                        icon="close"
                    />
                    <Menu
                        className={styles.overlayContent}
                        mode="vertical"
                        selectedKeys={[this.state.currentPage]}
                        onClick={this.toggle}
                    >
                        <Menu.Item
                            className={`${
                                this.state.currentPage === "/"
                                    ? styles.selected
                                    : " "
                            }`}
                            key="/"
                        >
                            <Link to="/home">Home</Link>
                        </Menu.Item>
                        <Menu.Item
                            className={`${
                                this.state.currentPage === "/menu"
                                    ? styles.selected
                                    : " "
                            }`}
                            key="/menu"
                        >
                            <Link to="/menu">Menu</Link>
                        </Menu.Item>
                        <Menu.Item
                            className={`${
                                this.state.currentPage === "/about"
                                    ? styles.selected
                                    : " "
                            }`}
                            key="/about"
                        >
                            <Link to="/about">About</Link>
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
        );
    }
}

export default withRouter(NavMenu);
