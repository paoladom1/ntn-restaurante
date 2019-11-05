import React from 'react';
import { Icon } from 'antd';
import styles from './Footer.module.scss';


const Footer = () => {
    return (
        <footer>
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
        </footer>
    );
}


export default Footer;