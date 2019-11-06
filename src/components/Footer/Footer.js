import React from 'react';
import { Icon, Layout } from 'antd';
import styles from './Footer.module.scss';

const { Footer: AntFooter } = Layout;

const Footer = () => {
    return (
        <AntFooter>
            <nav>
                <ul className={styles.social}>
                    <li>
                        <a href="https://www.facebook.com">
                            <Icon type="facebook" theme="filled" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com">
                            <Icon type="twitter-circle" theme="filled" />
                        </a>
                    </li>
                </ul>
            </nav>
            <div className={styles.down}>
                <strong>NTN Restaurant 2019</strong>    <Icon type="copyright-circle" theme="filled" />
            </div>
        </AntFooter>
    );
}


export default Footer;