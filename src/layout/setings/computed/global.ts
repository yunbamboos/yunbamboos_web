import store from "@/store";

export default {
    primary: { // 获取主颜色
        get() {
            return store.getters['config/getConfig']('primary');
        },
        set(value) {
            store.dispatch('config/setConfig', {key: 'primary', value: value}).then();
        }
    },
    bg: { // 默认背景颜色
        get() {
            return store.getters['config/getConfig']('bg');
        },
        set(value) {
            store.dispatch('config/setConfig', {key: 'bg', value: value}).then();
        }
    },
    color: {
        get() {
            return store.getters['config/getConfig']('color');
        },
        set(value) {
            store.dispatch('config/setConfig', {key: 'color', value: value}).then();
        }
    },
    border: {
        get() {
            return store.getters['config/getConfig']('border');
        },
        set(value) {
            store.dispatch('config/setConfig', {key: 'border', value: value}).then();
        }
    }
}