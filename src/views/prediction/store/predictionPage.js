import axios from 'axios';
import {handlers} from "../../../utils/handlers";

export default {
    namespaced: true,
    state: {
        title: '',
        data: [],
    },
    mutations: {
        setTitle (state, payload) {
            state.title = payload;
        }
    },
    actions: {

    },
    getters: {
        getTitle (state) {
            return state.title;
        }
    }
}
