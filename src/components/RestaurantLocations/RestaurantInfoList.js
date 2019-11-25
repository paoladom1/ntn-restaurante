import React from "react";
import { Card, List } from "antd";
import styles from "./RestaurantInfoList.module.scss";

class ListInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: []
        };
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/locations`)
            .then(res => {
                return res.json();
            })
            .then(res => {
                console.log(res);
                this.setState({
                    locations: res.data.locations
                });
            });
    }

    render() {
        return (
            <div className={styles.container} id="locations">
                <h2>SUCURSALES</h2>
                <List
                    className={styles.ls}
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 1,
                        md: 3,
                        lg: 3,
                        xl: 3,
                        xxl: 3
                    }}
                    dataSource={this.state.locations}
                    renderItem={item => (
                        <List.Item>
                            <Card className={styles.card} title={item.city}>
                                <div className={styles.cardBody}>
                                    <p>{`${item.address}, ${item.city}, ${item.department}`}</p>
                                    <p>{`Tel. ${item.phone}`}</p>
                                </div>
                            </Card>
                        </List.Item>
                    )}
                ></List>
            </div>
        );
    }
}

export default ListInfo;
