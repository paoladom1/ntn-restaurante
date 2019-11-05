import React from "react";
import styles from "./BigHero.module.scss";


const BigHero = () => {
  return (
      <section className={styles.big}>
          <div className={styles.inner}>
              <header className={styles.head}>
                  <h1>¡Bienvenido!</h1>
              </header>
              <div className={styles.content}>
                  <p>Cada vez que abrimos nuestras puertas nos esforzamos en atenderte a la altura que esperas,
                     y así prefieras más nuestros restaurantes.</p>
              </div>
          </div>
      </section>
  );
};

export default BigHero;