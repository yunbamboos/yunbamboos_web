import {Config} from '@/model';
import {Session} from '@/utils/storage';

const state = (): Config => ({
    layout: 'defaults',
    // 界面设置
    setting:{
        // 是否开启菜单水平折叠效果
        collapse: false,
        // 是否开启菜单手风琴效果
        uniqueOpened: true,
        // 是否开启固定 Header
        fixedHeader: false,
    },
    // 显示设置
    display: {
        //是否显示logo
        logo: true
    }
});

const getters = {
    getConfig: (state) => (key, group) => {
        if(group){
            return state[group][key];
        }
        return state[key];
    }
};

const mutations = {
    setConfig(state, {group, key, value}) {
        if(group){
            if(!state[group]){
                state[group]= {};
            }
            state[group][key] = value;
        } else {
            state[key] = value;
        }
    },
    saveConfigToSession(state){
        Session.set('config', state);
    }
};

const actions = {
    setConfigFromSession({commit}) {
        let config = Session.get("config");
        if (config) {
            let attrs = Object.keys(config);
            for(let i = 0; i < attrs.length; i++){
                let attr = attrs[i];
                let value = config[attr];
                if(value instanceof Object){
                    let keys = Object.keys(value);
                    for(let k = 0; k < keys.length; k++){
                        let key = keys[k];
                        commit('setConfig', {
                            group:attr,
                            key: key,
                            value: value[key]
                        });
                    }
                } else {
                    commit('setConfig', {
                        key: attr,
                        value: value
                    });
                }
            }
        }
    },
    setConfig({commit}, {group, key, value}) {
        commit('setConfig', {group, key, value});
        commit('saveConfigToSession');
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};

