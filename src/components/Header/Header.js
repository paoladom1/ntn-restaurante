import React from "react";
import { Layout} from "antd";
import NavMenu from "../NavMenu/NavMenu";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const { Header: AntdHeader } = Layout;

const Header = () => {
  return (
    <AntdHeader className={styles.header}>
      <Link className={styles.logo} to="/">
        <strong>NTN</strong>
        <span>Restaurant</span>
      </Link>
      <NavMenu className={styles.navmenu} />
    </AntdHeader>
  );
};

export default Header;
