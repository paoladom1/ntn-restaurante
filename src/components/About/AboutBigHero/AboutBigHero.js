import React from "react";
import styles from "./AboutBigHero.module.scss";


const AboutBigHero = () => {
    return (
        <div className={styles.wrapper}>
            <section className={styles.big}>
                <div className={styles.inner}>
                    <header className={styles.head}>
                        <h1>Conócenos</h1>
                    </header>
                    <div className={styles.content}>
                        <p>Por sus múltiples y deliciosos platillos y, en especial por sus famosos cortes de carne a la parrilla y deliciosos postres, NTN Restaurante es el restaurante obligado e indiscutible cuando se busca calidad y perfección; no en vano puede presumir con tanto orgullo de haber brindado un excelente servicio y exquisita comida desde 1987.</p>
                    </div>
                </div>
                <div className={styles.sesgoabajo}/>
            </section>
        </div>
    );
}

export default AboutBigHero;