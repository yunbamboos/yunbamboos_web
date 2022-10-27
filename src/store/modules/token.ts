import {Token} from '@/model';
import {Session} from '@/utils/storage';

const state = (): Token => ({
    account_token: '',
    refresh_token: ''
});

const getters = {
    getAccountToken: (state) => () => {
        return state.account_token;
    },
    getRefreshToken: (state) => () => {
        return state.refresh_token;
    }
};

const mutations = {
    setToken(state, token: Token) {
        state.account_token = token.account_token;
        state.refresh_token = token.refresh_token;
        Session.set('token', state);
    }
};

const actions = {
    setTokenFromSession({commit}) {
        let token = Session.get("token");
        if (token) {
            commit('setToken', token);
        }
    },
    setToken({commit}, token: Token) {
        commit('setToken', token);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};

