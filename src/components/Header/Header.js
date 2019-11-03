import React from "react";
import { Layout, Icon } from "antd";
import NavMenu from "../NavMenu/NavMenu";
import styles from "./Header.module.css";

const { Header: AntdHeader } = Layout;

const Header = () => {
  return (
    <AntdHeader className={styles.header}>
      <Icon type="appstore" /> {/*cambiar por logo de la aplicacion*/}
      <NavMenu className={styles.navmenu} />
    </AntdHeader>
  );
};

export default Header;
