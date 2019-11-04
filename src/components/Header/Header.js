import React from "react";
import { Layout} from "antd";
import NavMenu from "../NavMenu/NavMenu";
import styles from "./Header.module.css";

const { Header: AntdHeader } = Layout;

const Header = () => {
  return (
    <AntdHeader className={styles.header}>
      <a className={styles.logo} href="#">
        <strong>NTN</strong>
        <span>Restaurant</span>
      </a>

      <NavMenu className={styles.navmenu} />
    </AntdHeader>
  );
};

export default Header;
