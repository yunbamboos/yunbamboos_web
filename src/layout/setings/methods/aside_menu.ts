import store from "@/store";
import {getLightColor} from "@/utils/theme";

export default {
    onAsideMenuBgChange(){
        this.onAsideMenuBgGradualChange();
    },
    onAsideMenuBgGradualChange(){
        let topBarBgGradual = store.getters['config/getConfig']('topBarBgGradual');
        let color = store.getters['config/getConfig']('topBarBg');
        if(topBarBgGradual && color){
            document.documentElement.style.setProperty('--layout-nav-bars-bg', `linear-gradient(to bottom left , ${color}, ${getLightColor(color, 0.6)})`);
        } else {
            document.documentElement.style.setProperty('--layout-nav-bars-bg', color);
        }
    },
    onAsideMenuDefaultColorChange(){
        let topBarDefaultColor = store.getters['config/getConfig']('topBarDefaultColor');
        document.documentElement.style.setProperty('--layout-nav-bars-color', topBarDefaultColor);
    },
    onAsideMenuSelectedColorChange(){
        let topBarSelectedColor = store.getters['config/getConfig']('topBarSelectedColor');
        document.documentElement.style.setProperty('--layout-nav-bars-hover-color', topBarSelectedColor);
    },
    onAsideMenuSelectedBgChange(){
        let topBarSelectedBg = store.getters['config/getConfig']('topBarSelectedBg');
        document.documentElement.style.setProperty('--layout-nav-bars-hover-bg-color', topBarSelectedBg);
    },
    initAsideMenu(){ // 初始化顶栏配置
        this.onAsideMenuBgChange();
        this.onAsideMenuDefaultColorChange();
        this.onAsideMenuSelectedColorChange()
        this.onAsideMenuSelectedBgChange()
    }
}