import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu, Button, Icon } from "antd";
import styles from "./NavMenu.module.scss";

class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      currentPage: "/"
    };
  }

  componentDidMount() {
    this.setState({ currentPage: this.props.location.pathname });
  }

  toggle = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    return (
      <div>
        <Button
          className={styles.menuBtn}
          onClick={this.toggle}
          style={{ marginBottom: 16 }}
        >
          <Icon type="menu" />
        </Button>
        <div
          className={`${this.state.collapsed ? styles.hidden : styles.shown} ${
            styles.overlay
          }`}
        >
          <Button className={styles.closebtn} onClick={this.toggle} shape="circle" icon="close" />
          <Menu
            className={styles.overlayContent}
            mode="vertical"
            selectedKeys={[this.state.currentPage]}
            onClick={this.toggle}
          >
            <Menu.Item className={`${this.state.currentPage === "/" ? styles.selected : " "}`} key="/">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item className={`${this.state.currentPage === "/menu" ? styles.selected : " "}`} key="/menu">
              <Link to="/menu">Menu</Link>
            </Menu.Item>
            <Menu.Item className={`${this.state.currentPage === "/about" ? styles.selected : " "}`} key="/about">
              <Link to="/about">About</Link>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    );
  }
}

export default withRouter(NavMenu);
