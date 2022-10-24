import { ElLoading } from 'element-plus';

const win: any = window;
/**
 * 页面全局 Loading
 */
export default {
    start: function () {
        this.loading = ElLoading.service({
            fullscreen: true,
            text: '数据加载中...'
        });
        win.nextLoading = true;
    },
    done: function () {
        if(this.loading){
            this.loading.close();
            win.nextLoading = false;
        }
    }
};
