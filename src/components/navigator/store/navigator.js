export default {
    state: {
        statusMenu: false,
        data: null,
    },
    mutations: {
        setStatusMenu (state, payload) {
            state.statusMenu = payload;
        },
        setBigData (state, payload) {
            state.data = payload;
        },
    },
    actions: {
        CHANGE_STATUS_MENU: ({commit}, payload) => {
            commit('setStatusMenu', payload);
        },
        CREATE_DATA: ({commit}, payload) => {
            let array = [];
            if (payload) {
                for(let i = 0; i < 1000000; i++) {
                    array.push(i)
                }
            }
            commit('setBigData', array);
        },
    },
    getters: {
        getStatusMenu (state) {
            return state.statusMenu;
        },
        getBigData (state) {
            return state.data;
        },
    }
}
