import {Config} from '@/model';
import {Session} from '@/utils/storage';

const attrs = ["authorization", "fixedHeader", "headerHeight"];

const state = (): Config => ({
    authorization: {
        account_token: "",
        refresh_token: ""
    },
    fixedHeader: false,
    headerHeight: '60px'
});

const getters = {
    getAuthorization: (state) => () => {
        return state.authorization;
    }
};

const mutations = {
    setConfig(state, {key, value}) {
        state[key] = value;
        Session.set('config', state);
    }
};

const actions = {
    setConfigFromSession({commit}) {
        let config = Session.get("config");
        if (config) {
            for (let i = 0; i < attrs.length; i++) {
                let attr = attrs[i];
                let value = attrs[i];
                if (value) {
                    commit('setConfig', {key:attr, value:config[attr]});
                }
            }
        }
    },
    setConfig({commit}, {key, value}) {
        commit('setConfig', {key, value});
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};

