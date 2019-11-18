import React from "react";
import styles from "./BigHero.module.scss";
import { Image, Transformation } from "cloudinary-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink } from "react-router-hash-link";

const BigHero = () => {
    return (
        <section className={styles.big}>
            <Image
                publicId={"/proyecto/big-hero/big-hero"}
                className={styles.img}
            >
                <Transformation
                    fetchFormat="auto"
                    crop="crop"
                    gravity="north"
                    height="800"
                    width="1920"
                />
                <Transformation
                    background="#060505"
                    color="#ffffff"
                    effect="contrast:75"
                />
            </Image>
            <div className={styles.inner}>
                <header className={styles.head}>
                    <h1>¡Bienvenido!</h1>
                </header>
                <div className={styles.content}>
                    <p>
                        Cada vez que abrimos nuestras puertas nos esforzamos en
                        atenderte a la altura que esperas, y así prefieras más
                        nuestros restaurantes.
                    </p>
                </div>
            </div>
            <HashLink
                to="/#locations"
                scroll={el => el.scrollIntoView({ behavior: "smooth", block: "center" })}
            >
                <FontAwesomeIcon className={styles.icon} icon="chevron-down" />
            </HashLink>
        </section>
    );
};

export default BigHero;
