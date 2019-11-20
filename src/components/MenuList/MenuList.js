import React from "react";
import { Row, Col } from "antd";
import styles from "./MenuList.module.scss";
import { Link } from "react-router-dom";
import { Image, Transformation } from "cloudinary-react";

const menuListInfo = [
    {
        name: "ENTRADAS",
        link: "/menu/entradas",
        grid: {
            xs: 24,
            md: 24,
            lg: 13
        },
        image: "proyecto/entrees",
        transformations: {
            crop: "fill",
            fontSize: 120
        }
    },
    {
        name: "DESAYUNOS",
        link: "/menu/desayunos",
        grid: {
            xs: 24,
            md: 24,
            lg: 11
        },
        image: "proyecto/breakfast",
        transformations: {
            crop: "fill",
            fontSize: 120
        }
    },
    {
        name: "PRINCIPALES",
        link: "/menu/principales",
        grid: {
            xs: 24,
            md: 24,
            lg: 11
        },
        image: "proyecto/main",
        transformations: {
            crop: "fill",
            fontSize: 75
        }
    },
    {
        name: "ANTOJITOS",
        link: "/menu/antojitos",
        grid: {
            xs: 24,
            md: 24,
            lg: 13
        },
        image: "proyecto/snacks",
        transformations: {
            crop: "fill",
            fontSize: 120
        }
    },
    {
        name: "POSTRES",
        link: "/menu/postres",
        grid: {
            xs: 24,
            md: 24,
            lg: 13
        },
        image: "proyecto/dessert",
        transformations: {
            crop: "fill",
            fontSize: 120
        }
    },
    {
        name: "BEBIDAS",
        link: "/menu/bebidas",
        grid: {
            xs: 24,
            md: 24,
            lg: 11
        },
        image: "proyecto/beverages",
        transformations: {
            crop: "fill",
            fontSize: 120
        }
    }
];

const MenuList = () => {
    return (
        <Row>
            {menuListInfo.map((submenu, index) => (
                <Col
                    key={index}
                    className={styles.menu}
                    xs={submenu.grid.xs}
                    md={submenu.grid.md}
                    lg={submenu.grid.lg}
                >
                    <Link className={styles.submenu} to={submenu.link}>
                        <Image publicId={submenu.image} className={styles.img}>
                            <Transformation
                                fetchFormat="auto"
                                crop={submenu.transformations.crop}
                                aspectRatio="16:9"
                            />
                        </Image>
                        <div className={styles.imageOverlay} />
                        <span className={styles.name}>{submenu.name}</span>
                    </Link>
                </Col>
            ))}
        </Row>
    );
};

export default MenuList;
