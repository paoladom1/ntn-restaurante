import React from 'react';
import { Button, Icon } from 'antd';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <Icon type="twitter" />
            <Icon type="facebook" theme="filled" />
            <Icon type="instagram" theme="filled" />
            
        </footer>
    );
}


export default Footer;