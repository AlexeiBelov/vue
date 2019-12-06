import axios from "axios";
import { handlers } from "../../../utils/handlers";

const baseURL = "http://api.openweathermap.org/data/2.5/weather?q=Moscow&APPID=8cf02cc8d811f9097d34cc2a869f2821";

let baseApi = axios.create({
    baseURL,
    'X-Gismeteo-Token': '56b30cb255.3443075'
});
export default {
    get() {
        return baseApi.get('')
            .then((response) => {
                console.log(response);
                handlers.defaultSuccessHandler(`Ответ сервера ${response.status}`, 'Успешно!')
                return response;
            })
            .catch((error) => {
                handlers.defaultErrorAPIHandler(error.statusText, error.status);
            })
    }
};
