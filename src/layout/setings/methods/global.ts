import store from "@/store";
import {ElMessage} from "element-plus";
import {getDarkColor, getLightColor} from "@/utils/theme";

export default {
    onPrimaryColorChange() { // 全局  Primary Color 事件
        let primary = store.getters['config/getConfig']('primary');
        if (!primary) return ElMessage.warning('全局主题 primary 颜色值不能为空');
        // 颜色加深
        document.documentElement.style.setProperty('--el-color-primary-dark-2', `${getDarkColor(primary, 0.1)}`);
        document.documentElement.style.setProperty('--el-color-primary', primary);
        // 颜色变浅
        for (let i = 1; i <= 9; i++) {
            document.documentElement.style.setProperty(`--el-color-primary-light-${i}`, `${getLightColor(primary, i / 10)}`);
        }
    },
    onBgChange() {
        let bg = store.getters['config/getConfig']('bg');
        document.documentElement.style.setProperty('--layout-bg', bg);
    },
    onColorChange() {
        let color = store.getters['config/getConfig']('color');
        document.documentElement.style.setProperty('--layout-color', color);
    },
    onBorderChange() {
        let border = store.getters['config/getConfig']('border');
        document.documentElement.style.setProperty('--layout-border', border);
    },
    initGlobal(){ // 初始化全局配置
        this.onPrimaryColorChange(); this.onBgChange(); this.onColorChange(); this.onBorderChange();
    },
}