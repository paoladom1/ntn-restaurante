import React from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Layout as AntdLayout } from 'antd';

const { Content } = AntdLayout;

const Layout = (props) => {
    const { children } = props;

    return (
        <AntdLayout>
            <Header />
            <Content>
                {children}
            </Content>
            <Footer />
        </AntdLayout>
    )
}

export default Layout;