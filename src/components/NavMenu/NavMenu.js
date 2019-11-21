import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu, Button, Icon } from "antd";
import styles from "./NavMenu.module.scss";
import OrderModal from "../OrderModal/OrderModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppContext } from "../../AppProvider";

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
            <AppContext.Consumer>
                {({ user }) => (
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
                            <Icon type="menu" className={styles.menuIcon} />
                        </Button>
                        <div
                            className={`${
                                this.state.collapsed
                                    ? styles.hidden
                                    : styles.shown
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
                                {Object.keys(user).length === 0 ? (
                                    <Menu.Item
                                        className={`${
                                            this.state.currentPage === "/signin"
                                                ? styles.selected
                                                : " "
                                        }`}
                                        key="/signin"
                                    >
                                        <Link to="/signin">Iniciar Sesión</Link>
                                    </Menu.Item>
                                ) : null}
                                <Menu.Item
                                    className={`${
                                        this.state.currentPage === "/"
                                            ? styles.selected
                                            : " "
                                    }`}
                                    key="/"
                                >
                                    <Link to="/">Home</Link>
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
                                {Object.keys(user).length === 0 ? null : (
                                    <Menu.Item
                                        className={`${
                                            this.state.currentPage === "/orders"
                                                ? styles.selected
                                                : " "
                                        }`}
                                        key="/orders"
                                    >
                                        <Link to="/orders">Orders</Link>
                                    </Menu.Item>
                                )}
                            </Menu>
                        </div>
                    </div>
                )}
            </AppContext.Consumer>
        );
    }
}

export default withRouter(NavMenu);
