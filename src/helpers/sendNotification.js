import { notification } from 'antd';

const availableTypes = ['warning', 'error', 'success'];
const availablePlacement = ['top', 'bottom', 'topRight', 'topLeft', 'bottomRight', 'bottomLeft'];

const sendNotification = (message, type, placement = 'top') => {
  if (!availableTypes.includes(type)) {
    console.error(`O tipo "${type}" não é valido para notificações`);
    return;
  }

  if (!availablePlacement.includes(placement)) {
    console.error(`O posisionamento "${placement}" não é valido para notificações`);
    return;
  }

  notification[type]({
    message,
    placement,
  });
};

export default sendNotification;
