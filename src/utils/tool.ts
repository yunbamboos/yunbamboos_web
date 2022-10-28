import { nextTick } from 'vue';
import router from '@/router';
import {APP_TITLE} from "@/constant";
/**
 * 设置浏览器标题
 */
export function useTitle() {
    nextTick(() => {
        const {meta} = router.currentRoute.value;
        let title = meta.title;
        if(title){
            document.title = `${title} - ${APP_TITLE}`;
        } else {
            document.title = `${APP_TITLE}`;
        }
    }).then(() =>{});
}

const other = {
    useTitle: () => {
        useTitle();
    }
};

// 统一批量导出
export default other;