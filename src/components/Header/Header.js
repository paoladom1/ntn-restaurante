import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";

import NavMenu from "../NavMenu/NavMenu";
import styles from "./Header.module.scss";

const { Header: AntdHeader } = Layout;

const Header = () => (
    <AntdHeader
        style={{ position: "fixed", zIndex: 1, width: "100%" }}
        className={styles.header}
    >
        <Link className={styles.logo} to="/">
            <strong>NTN</strong>
            <span>Restaurant</span>
        </Link>
        <div className={styles.icons}>
            <NavMenu className={styles.navmenu} />
        </div>
    </AntdHeader>
);

export default Header;
