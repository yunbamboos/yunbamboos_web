import { createI18n } from 'vue-i18n';
import store from '@/store';

import zhCn from '@/i18n/lang/zh-cn';
import zhTw from '@/i18n/lang/zh-tw';
import en from '@/i18n/lang/en';

const messages = {
    'zh-cn':{
        ...zhCn
    },
    'zh-tw':{
        ...zhTw
    },
    'en':{
        ...en
    }
}


// 导出语言国际化
export const i18n = createI18n({
    silentTranslationWarn: true,
    missingWarn: false,
    silentFallbackWarn: true,
    fallbackWarn: false,
    locale: store.getters['config/getConfig']('globalI18n'),
    fallbackLocale: 'zh-cn',
    messages,
});
