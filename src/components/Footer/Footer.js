import React from 'react';
import { Button, Icon } from 'antd';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <Button type='primary' className={styles.primary}> Prueba </Button>
            <Icon type="twitter" theme="filled" />
            <Icon type="facebook" theme="filled" />
            <Icon type="instagram" theme="filled" />
            
        </footer>
    );
}


export default Footer;