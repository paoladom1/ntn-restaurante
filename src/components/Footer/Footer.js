import React from 'react';
import { Button, Icon } from 'antd';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <Button type='primary' className={styles.primary}> Prueba </Button>
            <Icon type="facebook" theme="filled" />
        </footer>
    );
}


export default Footer;