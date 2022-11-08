import store from "@/store";

export default {
    asideMenuBg: { // 顶栏背景色
        get() {
            return store.getters['config/getConfig']('asideMenuBg');
        },
        set(value) {
            store.dispatch('config/setConfig', {key: 'asideMenuBg', value: value}).then();
        }
    },
    asideMenuBgGradual: { // 顶栏背景色渐变
        get() {
            return store.getters['config/getConfig']('asideMenuBgGradual');
        },
        set(value) {
            store.dispatch('config/setConfig', {key: 'asideMenuBgGradual', value: value}).then();
        }
    },
    asideMenuDefaultColor: {
        get() {
            return store.getters['config/getConfig']('asideMenuDefaultColor');
        },
        set(value) {
            store.dispatch('config/setConfig', {key: 'asideMenuDefaultColor', value: value}).then();
        }
    },
    asideMenuSelectedColor: {
        get() {
            return store.getters['config/getConfig']('asideMenuSelectedColor');
        },
        set(value) {
            store.dispatch('config/setConfig', {key: 'asideMenuSelectedColor', value: value}).then();
        }
    },
    asideMenuSelectedBg: {
        get() {
            return store.getters['config/getConfig']('asideMenuSelectedBg');
        },
        set(value) {
            store.dispatch('config/setConfig', {key: 'asideMenuSelectedBg', value: value}).then();
        }
    }
}