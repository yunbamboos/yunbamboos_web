import store from "@/store";
import global from "@/layout/setings/computed/global";
import topBar from "@/layout/setings/computed/top_bar";
import asideMenu from "@/layout/setings/computed/aside_menu";

export default {
    drawer() { // 是否打开设置抽屉
        return store.getters['config/getConfig']('drawer');
    },
    ...global,
    ...topBar,
    ...asideMenu
};