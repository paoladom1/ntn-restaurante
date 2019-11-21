import React from "react";
import { Image } from "cloudinary-react";
import styles from "./AboutBigHero.module.scss";


const AboutBigHero = () => {
    return (
        <div className={styles.wrapper}>
            <section className={styles.big}>
                <div className={styles.inner}>
                    <div className={styles.information}>
                        <h1>Conócenos</h1>
                        <hr color="black"/>
                        <div className={styles.content}>
                            <p>Por sus múltiples y deliciosos platillos y,en especial por sus famosos cortes de carne a la parrilla y deliciosos postres,
                                NTN Restaurante es el restaurante obligado e indiscutible cuando se busca calidad y perfección;</p>
                        </div>
                    </div>
                    <div className={styles.img}>
                        <div className={styles.im1}>
                            <Image publicId={"/proyecto/img3"} className={styles.imgH} />
                        </div>
                        <div className={styles.im2}>
                            <Image publicId={"/proyecto/img5"} className={styles.imgH} />
                        </div>
                        <div className={styles.im3}>
                            <Image publicId={"/proyecto/img4"} className={styles.imgH} />
                        </div>
                    </div>
                </div>
                <div className={styles.sesgoabajo} />
            </section>
        </div>
    );
}

export default AboutBigHero;