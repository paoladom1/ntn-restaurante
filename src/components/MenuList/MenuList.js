import React from "react";
import { Row, Col } from "antd";
import styles from "./MenuList.module.scss";
import { Link } from "react-router-dom";
import { Image, Transformation } from "cloudinary-react";

const MenuList = () => {
  return (
    <>
      <Row>
        <Col className={styles.menu} xs={24} md={13}>
          <Link className={styles.submenu} to="/menu/entrees">
            <Image publicId="samples/food/spices" className={styles.img}>
            <Transformation fetchFormat="auto"
                  crop="fill"
                  aspectRatio="16:9"/>
            <Transformation 
                  color="#FFFFFF"
                  overlay={{fontFamily: "Roboto", fontSize: 75, fontAntialias: "good", fontWeight: "bold", textDecoration: "underline", letterSpacing: 12, text: "ENTREES"}} 
            />
            </Image>
          </Link>
        </Col>
        <Col className={styles.menu} xs={24} md={11}>
          <Link className={styles.submenu} to="/menu/breakfast">
            <Image publicId="samples/food/breakfast" className={styles.img}>
            <Transformation fetchFormat="auto"
                  crop="fill"
                  aspectRatio="16:9"/>
            <Transformation 
                  color="#FFFFFF"
                  overlay={{fontFamily: "Roboto", fontSize: 75, fontAntialias: "good", fontWeight: "bold", textDecoration: "underline", letterSpacing: 12, text: "ENTREES"}} 
            />
            </Image>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className={styles.menu} xs={24} md={11}>
          <Link className={styles.submenu} to="/menu/lunch"></Link>
          <Image publicId="samples/food/fish-vegetables" className={styles.img}>
          <Transformation fetchFormat="auto"
                  crop="fill"
                  aspectRatio="16:9"/>
            <Transformation 
                  color="#FFFFFF"
                  overlay={{fontFamily: "Roboto", fontSize: 75, fontAntialias: "good", fontWeight: "bold", textDecoration: "underline", letterSpacing: 12, text: "ENTREES"}} 
            />
          </Image>
        </Col>
        <Col className={styles.menu} xs={24} md={13}>
          <Link className={styles.submenu} to="/menu/dinner"></Link>
          <Image publicId="samples/food/pot-mussels" className={styles.img}>
          <Transformation fetchFormat="auto"
                  crop="fill"
                  aspectRatio="16:9"/>
            <Transformation 
                  color="#FFFFFF"
                  overlay={{fontFamily: "Roboto", fontSize: 75, fontAntialias: "good", fontWeight: "bold", textDecoration: "underline", letterSpacing: 12, text: "ENTREES"}} 
            />
          </Image>
        </Col>
      </Row>
      <Row>
        <Col className={styles.menu} xs={24} md={13}>
          <Link className={styles.submenu} to="/menu/desserts">
            <Image publicId="samples/food/dessert" className={styles.img}>
            <Transformation fetchFormat="auto"
                  crop="fill"
                  aspectRatio="16:9"/>
            <Transformation 
                  color="#FFFFFF"
                  overlay={{fontFamily: "Roboto", fontSize: 75, fontAntialias: "good", fontWeight: "bold", textDecoration: "underline", letterSpacing: 12, text: "ENTREES"}} 
            />
            </Image>
          </Link>
        </Col>
        <Col className={styles.menu} xs={24} md={11}>
          <Link className={styles.submenu} to="/menu/drinks">
            <Image publicId="samples/food/drinks" className={styles.img}>
            <Transformation fetchFormat="auto"
                  crop="fill"
                  aspectRatio="16:9"/>
            <Transformation 
                  color="#FFFFFF"
                  overlay={{fontFamily: "Roboto", fontSize: 55, fontAntialias: "good", fontWeight: "bold", textDecoration: "underline", letterSpacing: 12, text: "ENTREES"}} 
            />
            </Image>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default MenuList;
