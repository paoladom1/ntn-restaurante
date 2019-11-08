import React from "react";
import { Card, Row, Col, Icon } from "antd";
import { Image, Transformation } from "cloudinary-react";

import styles from "./CustomMenu.module.scss";

const foodList = [
  {
    name: "pizza",
    description: "pizza con pepperoni",
    img: "/samples/food/food"
  },
  {
    name: "comidita",
    description: "platanito",
    imgURL:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic3.elcorreo.com%2Fwww%2Fmultimedia%2F201903%2F01%2Fmedia%2Fcortadas%2Fplatano-k4KD-U70794395930sIE-624x385%40El%2520Correo.jpg&imgrefurl=https%3A%2F%2Fwww.elcorreo.com%2Fjantour%2Fdespensa%2Ftemporada-platanos-20190301170527-nt.html&docid=W65R1T2RTx959M&tbnid=nQFPKwcS7gQ6PM%3A&vet=10ahUKEwji0ILA5NblAhXqUN8KHefVAwMQMwjmASgGMAY..i&w=513&h=371&bih=665&biw=1366&q=platano&ved=0ahUKEwji0ILA5NblAhXqUN8KHefVAwMQMwjmASgGMAY&iact=mrc&uact=8"
  },
  {
    name: "frijolitos",
    description: "frijolitos fritos",
    imgURL:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.gob.mx%2Fcms%2Fuploads%2Farticle%2Fmain_image%2F82784%2Ffrijol.jpg&imgrefurl=https%3A%2F%2Fwww.gob.mx%2Fagricultura%2Fes%2Farticulos%2Fla-importancia-del-frijol-en-mexico%3Fidiom%3Des&docid=MK8XKg10Xf12DM&tbnid=y_C5YntK6WPhuM%3A&vet=10ahUKEwi49YPb5NblAhVMxVkKHRCdC7kQMwiwASgBMAE..i&w=385&h=227&bih=665&biw=1366&q=frijol&ved=0ahUKEwi49YPb5NblAhVMxVkKHRCdC7kQMwiwASgBMAE&iact=mrc&uact=8"
  }
];


class CustomMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodList: foodList
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/client")
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <Card className={styles.card}>
        <Row className={styles.cardContent}>
          <Col className={styles.cardMenu} xs={24} md={13}>
            <div className={styles.cardTitle}>
              <h2 className={styles.title}>
                {this.props.name}
              </h2>
            </div>
            <div className={styles.listContent}>
              {this.state.foodList.map(food => {
                return (
                  <div key={food.name}>
                    <h3 className={styles.foodName}>{food.name}</h3>
                    <p className={styles.foodDescription}>{food.description}</p>
                    <Icon type="plus-circle" theme="filled" />
                  </div>
                );
              })}
            </div>
          </Col>
          <Col xs={24} md={11}>
            <div>
              {this.state.foodList.map(food => {
                return (
                  <Image publicId={food.img} className={styles.img}>
                    <Transformation
                      crop="fill"
                      fetchFormat="auto"
                      aspectRatio="16:9"
                    />
                  </Image>
                );
              })}
            </div>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default CustomMenu;
