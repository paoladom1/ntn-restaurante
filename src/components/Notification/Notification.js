import { notification } from "antd";

const openNotification = (message, description, type, duration ) => {
    notification[type]({
        message: message,
        description: description,
        duration: duration
    });
};

export default openNotification;