import React from "react";
import styles from "./BigHero.module.scss";


const BigHero = () => {
  return (
      <section className={styles.big}>
          <div className={styles.inner}>
              <header className={styles.head}>
                  <h1>¡Bienvenido!</h1>
                  <hr/>
              </header>
              <div className={styles.content}>
                  <p>Cada vez que abrimos nuestras puertas nos esforzamos en atenderte a la altura que esperas,
                     y así prefieras más nuestros restaurantes. <br/> 
                     Gracias a ti hoy en dia somos lo que somos y por ello hemos decidido innovarnos, manteniendo nuestra calidad,
                     servicio y excelencia <br/> pero abriendole los brazos a la teconologia.</p>
              </div>
          </div>
      </section>
  );
};

export default BigHero;