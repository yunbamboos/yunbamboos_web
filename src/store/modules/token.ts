import {Token} from '@/model';
import {Session} from '@/utils/storage';

const state = (): Token => ({
    token_id: '',
});

const getters = {
    getTokenId: (state) => () => {
        return state.token_id;
    }
};

const mutations = {
    setToken(state, token: Token) {
        state.token_id = token.token_id;
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
    },
    clearToken({commit}) {
        commit('setToken', {
            token_id: ''
        });
        Session.remove('token');
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};

