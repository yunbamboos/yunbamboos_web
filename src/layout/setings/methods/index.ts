import store from "@/store";
import global from "@/layout/setings/methods/global";
import topBar from "@/layout/setings/methods/top_bar";
import asideMenu from "@/layout/setings/methods/aside_menu";

export default {
    closeSetingsDrawer() {
        store.dispatch('config/setConfig', {key: 'drawer', value: false}).then();
    },
    init(){
        this.initGlobal();
        this.initTopBar();
        this.initAsideMenu();
    },
    ...global,
    ...topBar,
    ...asideMenu
}