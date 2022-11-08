import store from "@/store";
import {getLightColor} from "@/utils/theme";

export default {
    onTopBarBgChange(){
        this.onTopBarBgGradualChange();
    },
    onTopBarBgGradualChange(){
        let gradual = store.getters['config/getConfig']('topBarBgGradual');
        let color = store.getters['config/getConfig']('topBarBg');
        if(gradual && color){
            document.documentElement.style.setProperty('--layout-nav-bars-bg', `linear-gradient(to bottom left , ${color}, ${getLightColor(color, 0.6)})`);
        } else {
            document.documentElement.style.setProperty('--layout-nav-bars-bg', color);
        }
    },
    onTopBarDefaultColorChange(){
        let color = store.getters['config/getConfig']('topBarDefaultColor');
        document.documentElement.style.setProperty('--layout-nav-bars-color', color);
    },
    onTopBarSelectedColorChange(){
        let color = store.getters['config/getConfig']('topBarSelectedColor');
        document.documentElement.style.setProperty('--layout-nav-bars-hover-color', color);
    },
    onTopBarSelectedBgChange(){
        let bg = store.getters['config/getConfig']('topBarSelectedBg');
        document.documentElement.style.setProperty('--layout-nav-bars-hover-bg-color', bg);
    },
    initTopBar(){ // 初始化顶栏配置
        this.onTopBarBgChange();
        this.onTopBarDefaultColorChange();
        this.onTopBarSelectedColorChange()
        this.onTopBarSelectedBgChange()
    }
}