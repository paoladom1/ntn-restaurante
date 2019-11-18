import React from "react"
import styles from "./FormularioRest.module.scss"
import { Button, Form, Icon } from 'antd';

const FormularioRest = () => {
    return (
        <section className={styles.content}>
            <div className={styles.inner}>
                <section>
                    <h2>Reservas:</h2>
                    <form method="post">
                        <div className={styles.fields}>
                            <div className={styles.field}>
                                <label for="name">Nombre</label>
                                <input type="text" name="name" id="name"></input>
                            </div>
                            <div className={styles.field}>
                                <label for="email">Email</label>
                                <input type="email" name="emailText" id="email"></input>
                            </div>
                            <div className={styles.field}>
                                <label for="phone">Telefono</label>
                                <input type="tel" id="phone" name="phone" vpattern="[0-9]{4}-[0-9]{4}-" required></input>
                            </div>
                            <div className={styles.field}>
                                <label for="cant">Cantidad de personas</label>
                                <input type="number" name="numberInput" min="0" max="25"></input>
                            </div>
                            <div className={styles.field}>
                                <label for="zone">Zona:</label>
                                <select name="select1">
                                    <option value="Interna">Interna</option>
                                    <option value="Externa">Externa</option>
                                    <option value="Terraza">Terraza</option>
                                </select>
                                <div className={styles.field}>
                                    <label for="title">Tematica:</label>
                                    <input type="text" name="titleText" id="title"></input>
                                </div>
                            </div>
                        </div>
                        <ul className={styles.actions}>
                            <li>
                                <input type="submit" value="Send Information" className={styles.primary}></input>
                            </li>
                        </ul>
                    </form>
                </section>
                <section className={styles.information}>
                    <section>
                        <div className={styles.first}>
                            <Icon type="mail" theme="filled" />
                            <h3>Email</h3>
                            <a href="#">ntnrestaurant@gmail.com</a>
                        </div>
                    </section>
                    <section>
                        <div className={styles.first}>
                            <Icon type="phone" theme="filled" />
                            <h3>Email</h3>
                            <span>2210-6600</span>
                        </div>
                    </section>
                </section>
            </div>
        </section>
    )
}

export default FormularioRest;