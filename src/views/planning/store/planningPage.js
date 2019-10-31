import { DATE } from '../../../utils/date'

export default {
    namespaced: true,
    state: {
        title: 'Планирование',
        setCountTime: '',
        table: null,
        countTable: null,
        isCollapse: false,
        pageSize: 5,
        currentPageSize: 1,
        totalPage: 0
    },
    mutations: {
        /*---------------------------------Планирование Текущие задачи Активные задачи---------------------------------*/
        setTitlePlanning (state, payload) {
            state.title = payload;
        },
        setCountTime (state, payload) {
            state.setCountTime = payload;
        },
        setTable (state, payload) {
            state.table = payload;
        },
        setCountTable (state, payload) {
            if (typeof payload === 'string') {
                state.countTable.length = 0;
                let array = state.table.filter(item => {
                    return item.title.toLowerCase().includes(payload.toLowerCase());
                });
                state.totalPage = array.length - 1;
                state.table && (state.countTable = array.slice(0, 5));
            } else {
                if (state.table !== null) {
                    state.totalPage = state.table.length - 1;
                }
                showPartTable();
            }

            function showPartTable() {
                if (!!payload[0] && !!payload[1]) {
                    state.table && (state.countTable = state.table.slice(payload[0] * payload[1] - payload[0], payload[0] * payload[1]));
                } else {
                    state.table && (state.countTable = state.table.slice(0, 5));
                }
            }
        },
        setIsCollapse (state, payload) {
            state.isCollapse = payload;
        },
        setPageSize (state, payload) {
            state.pageSize = payload;
        },
        setCurrentPageSize (state, payload) {
            state.currentPageSize = payload;
        },
        setSearchCountTable (state, payload) {
            state.countTable.length = 0;
            state.countTable = state.table.filter(data => {
                return data.title.toLowerCase().includes(payload.toLowerCase())
            });
        },
        /*-------------------------------------------------------------------------------------------------------------*/
    },
    actions: {
        /*---------------------------------Планирование Текущие задачи Активные задачи---------------------------------*/
        SET_TITLE_PLANNING({commit}, payload) {
            commit('setTitlePlanning', payload);
        },
        SET_DATA_PLANNING({commit}, payload) {
            commit('setTable', payload);
            commit('setCountTime', DATE.countDateHoursMinSec());
        },
        SET_IS_COLLAPSE({commit}, payload) {
            commit('setIsCollapse', payload);
        },
        SET_COUNT_DATA_TABLE({commit}, payload) {
            commit('setCountTable', payload);
        },
        SET_COUNT_PAGE_SIZE({commit}, payload) {
            commit('setPageSize', payload);
        },
        SET_CURRENT_PAGE({commit}, payload) {
            commit('setCurrentPageSize', payload);
        },
        SET_SEARCH_COUNT_TABLE({commit}, payload) {
            commit('setCountTable', payload);
        },
        /*-------------------------------------------------------------------------------------------------------------*/
    },
    getters: {
        /*---------------------------------Планирование Текущие задачи Активные задачи---------------------------------*/
        getTitlePlanning (state) {
            return state.title;
        },
        getCountTime (state) {
            return state.setCountTime;
        },
        getIsCollapse (state) {
            return state.isCollapse;
        },
        getDataTable (state) {
            //console.log('getDataTable', state.table);
            return state.table;
        },
        getCountTable (state) {
            //console.log('state.countTable', state.countTable);
            return state.countTable;
        },
        getPageSize (state) {
            return state.pageSize;
        },
        getCurrentPage (state) {
            return state.currentPageSize;
        },
        getTotalPage (state) {
            return state.totalPage;
        },
        /*-------------------------------------------------------------------------------------------------------------*/
    }
}
