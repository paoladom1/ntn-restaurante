import React from "react";
import { Card, Row, Col } from "antd";

class CustomMenu extends React.Component {
  render() {
    return (
      <Card title="Breakfast">
        <Row>
          <Col xs={24} md={13}>
            {this.props.foodList.map(food => {
              return (
                <div key={food.name}>
                  <h3>{food.name}</h3>
                  <span>
                    {food.description}
                  </span>
                </div>
              );
            })}
          </Col>
          <Col xs={24} md={11}>
            comidita
          </Col>
        </Row>
      </Card>
    );
  }
}

export default CustomMenu;
