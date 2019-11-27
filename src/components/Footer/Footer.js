import React from 'react';
import { Icon, Layout } from 'antd';
import styles from './Footer.module.scss';

const { Footer: AntFooter } = Layout;

const Footer = () => {
    return (
        <AntFooter className={styles.footer}>
            <div className={styles.down}>
                <p>NTN Restaurant 2019</p>
                <Icon
                    className={styles.icon}
                    type="copyright"
                    theme="outlined"
                />
            </div>
        </AntFooter>
    );
};

export default Footer;
