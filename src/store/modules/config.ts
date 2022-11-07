import {Config} from '@/model';
import {Session} from '@/utils/storage';
import {userConfig} from "@/api";

const state = (): Config => ({
    // 是否打开布局配置
    drawer: false,
    // 默认 primary 主题颜色
    primary: '#38BFD4',
    // 默认背景颜色
    bg: '#ffffff',
    // 默认字体颜色
    color: '#171717',
    // 边框颜色
    border: '#eaeaea',
    // 布局切换
    layout: 'defaults',

    // 顶栏设置
    // 顶栏背景色
    topBarBg: '',
    // 背景渐变色
    topBarBgGradual: false,
    // 顶栏字体颜色
    topBarDefaultColor: '',
    topBarSelectedColor: '',
    topBarSelectedBg: '',


    // 是否开启菜单水平折叠效果
    collapse: false,
    // 是否开启菜单手风琴效果
    uniqueOpened: true,
    // 是否开启固定 Header
    fixedHeader: false,


    //是否显示logo
    logo: true,
    // 是否开启 breadcrumb，经典、横向布局不显示
    breadcrumb: true,
    // 是否开启 breadcrumb 图标
    breadcrumbIcon: true,


    // 默认初始语言，可选值"<zh-cn|en|zh-tw>"，默认 zh-cn
    globalI18n: 'zh-cn',
    // 默认全局组件大小，可选值"<large|'default'|small>"，默认 'large'
    globalComponentSize: 'large',
});

const getters = {
    getConfig: (state) => (key) => {
        return state[key];
    }
};

const mutations = {
    setConfig(state, {key, value}) {
        state[key] = value;
    },
    setConfigs(state, configs) {
        let attrs = Object.keys(configs);
        for (let i = 0; i < attrs.length; i++) {
            let attr = attrs[i];
            state[attr] = configs[attr];
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
            commit('setConfigs', config);
        }
    },
    setConfig({commit}, {key, value}) {
        commit('setConfig', {key, value});
        commit('saveConfigToSession');
    },
    queryCurLoginUserConfig({commit}) {
        return userConfig.queryCurLoginUserConfig().then(result => {
            if (result.code == 200) {
                let configList = result.data.user_config_list;
                for (let i = 0; i < configList.length; i++) {
                    let config = configList[i];
                    commit('setConfig', {
                        key: config.attr,
                        value: config.value
                    });
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

