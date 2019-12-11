export default {
    namespaced: true,
    state: {
        title: 'GeolocationPage'
    },
    mutations: {
        setGeolocationPage (state, payload) {
            state.title = payload;
        }
    },
    actions: {
        setGeolocationPage({commit}, payload) {
            commit('setGeolocationPage', payload);
        }
    },
    getters: {
        getGeolocationPage (state) {
            return state.title;
        }
    }
}
