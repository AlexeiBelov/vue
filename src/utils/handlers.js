import { Notification } from 'element-ui';

export const handlers = {
    defaultErrorHandler: (err) => {
        console.log(err);
        Notification.error({
            title: 'Произошла ошибка',
            message: err,
            showClose: true,
            duration: 3500,
            position: 'bottom-right',
        });
    },
    defaultErrorAPIHandler: (errorText, status) => {
        Notification.error({
            title: status,
            message: errorText,
            showClose: true,
            duration: 3500,
            position: 'bottom-right',
        });
    },
    defaultSuccessHandler: (title, message) => {
        Notification.success({
            title,
            message,
            position: 'bottom-right',
            duration: 2500,
            showClose: true,
        });
    },
    defaultWarningHandler: (title, message) => {
        Notification.warning({
            title,
            message,
            duration: 3500,
            position: 'bottom-right',
            showClose: true,
        });
    },
    pageErrorHandler: (title, message) => {
        Notification.error({
            title,
            message,
            duration: 3500,
            position: 'bottom-right',
            showClose: true,
        });
    },
};
