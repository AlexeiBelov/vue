export default {
    namespaced: true,
    state: {
        authToken: false
    },
    mutations: {
        setToken (state, payload) {
            state.authToken = payload;
        }
    },
    actions: {
        CHANGE_TOKEN: ({commit}, payload) => {
            commit('setToken', payload);
        }
    },
    getters: {
        getToken (state) {
            return state.authToken;
        }
    }
}
