import React from "react";
import styles from "./AboutContent.module.scss"


const AboutContent = () => {
    return (
        <div className={styles.wrapper}>
            <section className={styles.acercade}>
                <div className={styles.contenedor}>
                    <h2 className={styles.sobrenosotros}>Sobre nosotros</h2>
                    <hr />
                    <p className={styles.parrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dicta rem hic totam necessitatibus
                        tempora animi error perferendis. Vero corrupti porro quia! Ad saepe alias, officiis voluptatem sed, odio
                        dolores neque dolorem placeat nam quia numquam soluta ipsam nostrum consequuntur, a magnam non. Tenetur
                    repudiandae distinctio inventore voluptate fugit laborum?</p>

                </div>
            </section>
            <section className={styles.acercadeother}>
                <div className={styles.sesgootro} />
                <div className={styles.contenedor}>
                    <h2 className={styles.sobrenosotros}>Sobre nosotros</h2>
                    <hr />
                    <p className={styles.parrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dicta rem hic totam necessitatibus
                        tempora animi error perferendis. Vero corrupti porro quia! Ad saepe alias, officiis voluptatem sed, odio
                        dolores neque dolorem placeat nam quia numquam soluta ipsam nostrum consequuntur, a magnam non. Tenetur
                    repudiandae distinctio inventore voluptate fugit laborum?</p>
                </div>
            </section>
            <section className={styles.acercaUs}>
                <div className={styles.sesgo} />
                <div className={styles.contenedor}>
                    <h2 className={styles.sobrenosotros}>Sobre nosotros</h2>
                    <hr />
                    <p className={styles.parrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dicta rem hic totam necessitatibus
                        tempora animi error perferendis. Vero corrupti porro quia! Ad saepe alias, officiis voluptatem sed, odio
                        dolores neque dolorem placeat nam quia numquam soluta ipsam nostrum consequuntur, a magnam non. Tenetur
                    repudiandae distinctio inventore voluptate fugit laborum?</p>
                </div>
            </section>
            <section className={styles.acerca}>
                <div className={styles.sesguito} />
                <div className={styles.contenedor}>
                    <h2 className={styles.sobrenosotros}>Sobre nosotros</h2>
                    <hr />
                    <p className={styles.parrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dicta rem hic totam necessitatibus
                        tempora animi error perferendis. Vero corrupti porro quia! Ad saepe alias, officiis voluptatem sed, odio
                        dolores neque dolorem placeat nam quia numquam soluta ipsam nostrum consequuntur, a magnam non. Tenetur
                    repudiandae distinctio inventore voluptate fugit laborum?</p>
                </div>
            </section>
            <section className={styles.informacion}>
                <div className={styles.sesguitoU}/>
                <div className={styles.content}/>
            </section>
        </div>
    );
}

export default AboutContent;