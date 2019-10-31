import postsApi from "./postsApi";

const api = {
    posts: postsApi
    // other api ...
};

export const FactoryApi = {
    get: name => api[name]
};
