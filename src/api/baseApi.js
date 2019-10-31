import axios from "axios";

export const Url = process.env.VUE_APP_API_URL;
export const authToken = process.env.VUE_APP_API_AUTH_TOKEN;

const baseDomain = "https://jsonplaceholder.typicode.com";
const baseURL = `${baseDomain}`;

export default axios.create({
    baseURL
});
