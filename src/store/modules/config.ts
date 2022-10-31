import {Config, UserConfig} from '@/model';
import {Session} from '@/utils/storage';
import {userConfig} from "@/api";

const state = (): Config => ({
    // 默认 primary 主题颜色
    primary: '#38BFD4',
    // 是否开启深色模式
    dark: false,
    // 布局切换
    layout: 'defaults',
    // 界面设置
    setting: {
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
        logo: true,
        // 是否开启 breadcrumb，经典、横向布局不显示
        breadcrumb: true,
        // 是否开启 breadcrumb 图标
        breadcrumbIcon: true,
    },
    // 默认初始语言，可选值"<zh-cn|en|zh-tw>"，默认 zh-cn
    globalI18n: 'zh-cn',
    // 默认全局组件大小，可选值"<large|'default'|small>"，默认 'large'
    globalComponentSize: 'large',
});

const getters = {
    getConfig: (state) => (key, group) => {
        if (group) {
            return state[group][key];
        }
        return state[key];
    }
};

const mutations = {
    setConfig(state, {group, key, value}) {
        if (group && group !== 'default') {
            if (!state[group]) {
                state[group] = {};
            }
            state[group][key] = value;
        } else {
            state[key] = value;
        }
    },
    saveConfigToSession(state) {
        Session.set('config', state);
    }
};

const actions = {
    setConfigFromSession({commit}) {
        let config = Session.get("config");
        if (config) {
            let attrs = Object.keys(config);
            for (let i = 0; i < attrs.length; i++) {
                let attr = attrs[i];
                let value = config[attr];
                if (value instanceof Object) {
                    let keys = Object.keys(value);
                    for (let k = 0; k < keys.length; k++) {
                        let key = keys[k];
                        commit('setConfig', {
                            group: attr,
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
    },
    queryCurLoginUserConfig({commit}) {
        return userConfig.queryCurLoginUserConfig().then(result => {
            if (result.code == 200) {
                let configList = result.data.user_config_list;
                for (let i = 0; i < configList.length; i++) {
                    let config = configList[i];
                    if (config.group) {
                        commit('setConfig', {
                            group: config.group,
                            key: config.key,
                            value: config.value
                        });
                    } else {
                        commit('setConfig', {
                            key: config.key,
                            value: config.value
                        });
                    }
                }
                commit('saveConfigToSession');
                return Promise.resolve(true);
            } else {
                return Promise.reject(result.msg);
            }
        });
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};

