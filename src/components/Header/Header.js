import React from 'react';
import {
    Link
} from 'react-router-dom';
import {
    Layout,
    Menu
} from 'antd';

const { Header: AntdHeader} = Layout;

const Header = () => {
    return (
        <AntdHeader>
            <Menu mode='horizontal' defaultSelectedKeys={['home']}>
                <Menu.Item key='home'>
                    <Link to='/'>
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item key='menu'>
                    <Link to='/menu'>
                        Menu
                    </Link>
                </Menu.Item>
                <Menu.Item key='about'>
                    <Link to='/about'>
                        About
                    </Link>
                </Menu.Item>
            </Menu>
        </AntdHeader>
    )
}

export default Header;