import React from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Layout as AntdLayout } from 'antd';

const { Content } = AntdLayout;

const Layout = (props) => {
    const { children } = props;

    return (
        <AntdLayout style={{minHeight: "100vh"}}>
            <Header />
            <Content style={{paddingTop: 64}}>
                {children}
            </Content>
            <Footer />
        </AntdLayout>
    )
}

export default Layout;