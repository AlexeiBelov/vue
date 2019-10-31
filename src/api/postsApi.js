import baseApi from "./baseApi";
import {handlers} from "../utils/handlers";

const resource = "/photos";
export default {
    get() {
        return baseApi.get(`${resource}`)
            .then((response) => {
                handlers.defaultSuccessHandler(`Ответ сервера ${response.status}`, 'Успешно!')
                return response;
            })
            .catch((error) => {
                handlers.defaultErrorAPIHandler(error.statusText, error.status);
            })
    },
    getPost(postId) {
        return baseApi.get(`${resource}/${postId}`);
    },
    createPost(payload) {
        return baseApi.post(`${resource}`, payload);
    }
};
