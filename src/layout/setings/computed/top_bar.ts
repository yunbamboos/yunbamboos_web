import store from "@/store";

export default {
    topBarBg: { // 顶栏背景色
        get() {
            return store.getters['config/getConfig']('topBarBg');
        },
        set(value) {
            store.dispatch('config/setConfig', {key: 'topBarBg', value: value}).then();
        }
    },
    topBarBgGradual: { // 顶栏背景色渐变
        get() {
            return store.getters['config/getConfig']('topBarBgGradual');
        },
        set(value) {
            store.dispatch('config/setConfig', {key: 'topBarBgGradual', value: value}).then();
        }
    },
    topBarDefaultColor: {
        get() {
            return store.getters['config/getConfig']('topBarDefaultColor');
        },
        set(value) {
            store.dispatch('config/setConfig', {key: 'topBarDefaultColor', value: value}).then();
        }
    },
    topBarSelectedColor: {
        get() {
            return store.getters['config/getConfig']('topBarSelectedColor');
        },
        set(value) {
            store.dispatch('config/setConfig', {key: 'topBarSelectedColor', value: value}).then();
        }
    },
    topBarSelectedBg: {
        get() {
            return store.getters['config/getConfig']('topBarSelectedBg');
        },
        set(value) {
            store.dispatch('config/setConfig', {key: 'topBarSelectedBg', value: value}).then();
        }
    }
}