import axios from "axios";
import {handlers} from "../utils/handlers";

const baseDomain = "https://api.coindesk.com";
const baseURL = `${baseDomain}`;

export const api = axios.create({
    baseURL,
    /*headers: { Authorization: `Token` }*/
});
const resource = "/v1/bpi/currentprice.json";
export default {
    get() {
        return api.get(`${resource}`)
            .then((response) => {
                handlers.defaultSuccessHandler(`Ответ сервера ${response.status}`, 'Успешно!')
                return response.data;
            })
            .catch((error) => {
                console.log(error);
                if(error.statusText || error.status) {
                    handlers.defaultErrorAPIHandler(error.statusText, error.status);
                } else {
                    handlers.defaultErrorAPIHandler(    `Ошибка сети - ${error}`, 'Соотношение цен');
                }
            });
    },
};
