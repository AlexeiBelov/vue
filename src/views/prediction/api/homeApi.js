import axios from "axios";
import { handlers } from "../../../utils/handlers";

const baseDomain = "http://dkuber.domain.local:7201";
export const Url = process.env.VUE_APP_API_URL;
export const authToken = process.env.VUE_APP_API_AUTH_TOKEN;
const baseURL = process.env.NODE_ENV === '"development"' ? Url : baseDomain;
const resource = "/v1/sap_material";

let baseApi = axios.create({
    baseURL,
    headers: { Authorization: authToken }
});
export default {
    get() {
        return baseApi.get(`${resource}`)
            .then((response) => {
                console.log(response);
                handlers.defaultSuccessHandler(`Ответ сервера ${response.status}`, 'Успешно!')
                return response;
            })
            .catch((error) => {
                handlers.defaultErrorAPIHandler(error.statusText, error.status);
            })
    },
    getPhotos(postId) {
        return baseApi.get(`${resource}/${postId}`);
    },
    createPhotos(payload) {
        return baseApi.post(`${resource}`, payload);
    }
};
