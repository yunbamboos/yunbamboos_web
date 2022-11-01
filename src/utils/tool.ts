import {nextTick} from 'vue';
import router from '@/router';
import {APP_TITLE} from "@/constant";
import {i18n} from '@/i18n';

/**
 * 设置浏览器标题
 */
export function useTitle() {
    nextTick(() => {
        const {meta} = router.currentRoute.value;
        let title = meta.title;
        let appTitle = i18n.global.t(APP_TITLE);
        if (title) {
            title = i18n.global.t(<any>meta.title)
            document.title = `${title} - ${appTitle}`;
        } else {
            document.title = `${appTitle}`;
        }
    }).then(() => {
    });
}

const other = {
    useTitle: () => {
        useTitle();
    }
};

// 统一批量导出
export default other;