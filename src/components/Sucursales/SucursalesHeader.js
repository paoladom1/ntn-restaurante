import React from "react";
import styles from "./SucursalesHeader.module.scss";
import RestaurantInfoList from '../../components/List/RestaurantInfoList'



const SucursalesHeader = () => {
    return (
      <section className={styles.Sucur}>
          <div className={styles.hd}>
              <div className={styles.content}>
                <RestaurantInfoList></RestaurantInfoList>
              </div>
          </div>
      </section>
    );
  };
  
  export default SucursalesHeader;