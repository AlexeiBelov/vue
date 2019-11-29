import axios from "axios";
import {handlers} from "../utils/handlers";

const baseDomain = "http://iss.moex.com/iss/history/engines/stock/markets/shares/boards/tqbr";
const baseURL = `${baseDomain}`;

export const api = axios.create({
    baseURL,
    /*headers: { Authorization: `Token` }*/
});
const resource = "/securities.json?date=2019-11-20";
export default {
    getMOEXX() {
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
                    handlers.defaultErrorAPIHandler(    `Ошибка сети - ${error}`, 'Данные MOEX');
                }
            });
    },
};
