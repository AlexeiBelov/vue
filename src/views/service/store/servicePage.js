import axios from 'axios';

export default {
    namespaced: true,
    state: {
        title: 'Сервисы'
    },
    mutations: {
        setTitleService (state, payload) {
            state.title = payload;
        }
    },
    actions: {
        SET_TITLE_REPORTS: async({commit}, payload) => {
            commit('setTitleService', payload);
        }
    },
    getters: {
        getTitleService (state) {
            return state.title;
        }
    }
}
