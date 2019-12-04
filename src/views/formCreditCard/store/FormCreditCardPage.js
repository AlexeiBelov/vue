export default {
    namespaced: true,
    state: {
        title: 'FormCreditCard'
    },
    mutations: {
        setFormCreditCard (state, payload) {
            state.title = payload;
        }
    },
    actions: {
        setFormCreditCard({commit}, payload) {
            commit('setFormCreditCard', payload);
        }
    },
    getters: {
        getFormCreditCard (state) {
            return state.title;
        }
    }
}
