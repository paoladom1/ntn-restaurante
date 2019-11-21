import React from "react";
import styles from "./AboutContent.module.scss"


const AboutContent = () => {
    return (
        <div className={styles.wrapper}>
            <section className={styles.acercade}>
                <div className={styles.contenedor}>
                    <h2 className={styles.sobrenosotros}>Sobre nosotros</h2>
                    <hr />
                    <p>Desde su apertura, Restaurantes NTN fue reconocido por la calidad de sus platos y precios altamente competitivos.<br/>
                        Los resultados de tradición y calidad no sólo se encuentran en la comida, sino en el cálido ambiente que inunda el lugar. Su tamaño, detalles y ambientación son la combinación ideal para que nuestros clientes se encuentren cómodos y en confianza</p>
                </div>  
            </section>
            <section className={styles.acercadeother}>
                <div className={styles.sesgootro} />
                <div className={styles.contenedor}>
                    <div className={styles.mision}>
                        <h2 className={styles.sobrenosotros}>Misión</h2>
                        <hr />
                        <p>Dar a nuestros clientes la mejor experiencia al comer fuera, garantizando la calidad y el sabor único de La NTN en un ambiente agradable y con el mejor servicio,
                         buscando el desarrollo de nuestros colaboradores y generando valor para los accionistas de manera sostenible.</p>
                    </div>
                    <div className={styles.vision}>
                        <h2 className={styles.sobrenosotros}>Vision</h2>
                        <hr/>
                        <p>Ser la empresa líder a nivel regional en el negocio de Restaurantes tipo Steak House.</p>
                    </div>
                </div>
            </section>
            <section className={styles.acercaUs}>
                <div className={styles.sesgo} />
                <div className={styles.contenedor}>
                    <h2 className={styles.sobrenosotros}>Bienvenido</h2>
                    <hr />
                    <p className={styles.parrafo}>Te damos la bienvenida a tu casa “NTN Restaurante”,conoce más acerca de nuestros platillos preparados con los mayores estándares de calidad.
                    Nuestro compromiso es suplir todas tus expectativas y hacer que en tu visita vivas la mejor experiencia.<br/>
                    Por sus múltiples y deliciosos platillos y, en especial por sus famosos cortes de carne a la parrilla y deliciosos postres, NTN Restaurante es el restaurante obligado e indiscutible cuando se busca calidad y perfección; no en vano puede presumir con tanto orgullo de haber brindado un excelente servicio y exquisita comida desde 1987.</p>
                </div>
            </section>
            <section className={styles.informacion}>
                <div className={styles.sesguitoU} />
                <div className={styles.content} />
            </section>
        </div >
    );
}

export default AboutContent;