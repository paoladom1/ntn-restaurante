import React from "react";
import { Row, Col } from "antd";
import styles from "./MenuList.module.scss";
import { Link } from "react-router-dom";
import { Image, Transformation } from "cloudinary-react";

const menuListInfo = [
  {
    name: "ENTRADAS",
    link: "/menu/entrees",
    grid: {
      xs: 24,
      md: 13
    },
    image: "samples/food/spices",
    transformations: {
      crop: "fill",
      fontSize: 120
    }
  },
  {
    name: "DESAYUNOS",
    link: "/menu/breakfast",
    grid: {
      xs: 24,
      md: 11
    },
    image: "samples/food/breakfast",
    transformations: {
      crop: "fill",
      fontSize: 75
    }
  },
  {
    name: "ALMUERZOS",
    link: "/menu/lunch",
    grid: {
      xs: 24,
      md: 11
    },
    image: "samples/food/fish-vegetables",
    transformations: {
      crop: "fill",
      fontSize: 75
    }
  },
  {
    name: "CENAS",
    link: "/menu/dinner",
    grid: {
      xs: 24,
      md: 13
    },
    image: "samples/food/pot-mussels",
    transformations: {
      crop: "fill",
      fontSize: 75
    }
  },
  {
    name: "POSTRES",
    link: "/menu/dessert",
    grid: {
      xs: 24,
      md: 13
    },
    image: "samples/food/dessert",
    transformations: {
      crop: "fill",
      fontSize: 75
    }
  },
  {
    name: "BEBIDAS",
    link: "/menu/drinks",
    grid: {
      xs: 24,
      md: 11
    },
    image: "samples/food/drinks",
    transformations: {
      crop: "fill",
      fontSize: 40
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
        >
          <Link className={styles.submenu} to={submenu.link}>
            <Image publicId={submenu.image} className={styles.img}>
              <Transformation
                fetchFormat="auto"
                crop={submenu.transformations.crop}
                aspectRatio="16:9"
              />
              <Transformation
                color="#FFFFFF"
                overlay={{
                  fontFamily: "Roboto",
                  fontSize: submenu.transformations.fontSize,
                  fontAntialias: "good",
                  fontWeight: "bold",
                  textDecoration: "underline",
                  letterSpacing: 12,
                  text: submenu.name
                }}
              />
            </Image>
            <div className={styles.imageOverlay} />
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default MenuList;
