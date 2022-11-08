import store from "@/store";
import {getLightColor} from "@/utils/theme";

export default {
    onAsideMenuBgChange(){
        this.onAsideMenuBgGradualChange();
    },
    onAsideMenuBgGradualChange(){
        let gradual = store.getters['config/getConfig']('asideMenuBgGradual');
        let color = store.getters['config/getConfig']('asideMenuBg');
        if(gradual && color){
            document.documentElement.style.setProperty('--layout-aside-menu-bg', `linear-gradient(to left bottom  , ${color}, ${getLightColor(color, 0.6)})`);
        } else {
            document.documentElement.style.setProperty('--layout-aside-menu-bg', color);
        }
    },
    onAsideMenuDefaultColorChange(){
        let color = store.getters['config/getConfig']('asideMenuDefaultColor');
        document.documentElement.style.setProperty('--layout-aside-menu-color', color);
    },
    onAsideMenuSelectedColorChange(){
        let color = store.getters['config/getConfig']('asideMenuSelectedColor');
        document.documentElement.style.setProperty('--layout-aside-menu-hover-color', color);
    },
    onAsideMenuSelectedBgChange(){
        let bg = store.getters['config/getConfig']('asideMenuSelectedBg');
        document.documentElement.style.setProperty('--layout-aside-menu-hover-bg-color', bg);
    },
    initAsideMenu(){ // 初始化顶栏配置
        this.onAsideMenuBgChange();
        this.onAsideMenuDefaultColorChange();
        this.onAsideMenuSelectedColorChange()
        this.onAsideMenuSelectedBgChange()
    }
}