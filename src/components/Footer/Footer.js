import React from "react";
import { Icon, Layout } from "antd";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter>
      <nav>
        <ul className={styles.social}>
          <li>
            <a href="https://www.facebook.com">
              <FontAwesomeIcon className={styles.icon} icon={["fab", "facebook"]} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com">
            <FontAwesomeIcon className={styles.icon} icon={["fab", "twitter"]} />
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.down}>
        <p>NTN Restaurant 2019</p>
        <Icon className={styles.icon} type="copyright" theme="outlined" />
      </div>
    </AntFooter>
  );
};

export default Footer;
