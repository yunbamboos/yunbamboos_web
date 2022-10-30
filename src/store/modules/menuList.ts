import {Menu, MenuList} from '@/model';
import {menu} from '@/api';
// 存储当前登录用户菜单接口 原始数据
const state = (): MenuList => ({
    list: []
});

// getters
const getters = {
    length: (state) => () => {
        return state.list.length;
    },
    getAll: (state) => () => {
        return state.list;
    }
};

const mutations = {
    add(state, menu: Menu) {
        state.list.push(menu);
    },
    addAll(state, menus: Array<Menu>) {
        if (menus) {
            for (let i = 0; i < menus.length; i++) {
                state.list.push(menus[i]);
            }
        }
    }
};

const actions = {
    add({commit}, menu: Menu) {
        commit('add', menu);
    },
    addAll({commit}, menus: Array<Menu>) {
        commit('addAll', menus);
    },
    queryCurLoginUserMenuList({commit}) {
        return menu.queryCurLoginUserMenuList().then(result => {
            if (result.code == 200) {
                commit('addAll', result.data.menu_list);
                return Promise.resolve(result.data.menu_list);
            } else {
                return Promise.reject(result.msg);
            }
        });
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};

