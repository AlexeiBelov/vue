export default {
    namespaced: true,
    state: {
        title: 'helloWorld'
    },
    mutations: {
        setTitleHelloWorld (state, payload) {
            state.title = payload;
        }
    },
    actions: {
        setTitleHelloWorld({commit}, payload) {
            commit('setTitleHelloWorld', payload);
        }
    },
    getters: {
        getTitleHelloWorld (state) {
            return state.title;
        }
    }
}
