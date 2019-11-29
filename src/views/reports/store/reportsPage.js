export default {
    namespaced: true,
    state: {
        title: 'Дашборды и графики',
    },
    mutations: {
        setTitleReports (state, payload) {
            state.title = payload;
        }
    },
    actions: {
        SET_TITLE_REPORTS: ({commit}, payload) => {
            commit('setTitleReports', `Actual time Reykjavik ${payload}`);
        }
    },
    getters: {
        getTitleReports (state) {
            return state.title;
        }
    }
}
