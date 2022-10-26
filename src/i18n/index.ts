import { createI18n } from 'vue-i18n';


// 导出语言国际化
export const i18n = createI18n({
    silentTranslationWarn: true,
    missingWarn: false,
    silentFallbackWarn: true,
    fallbackWarn: false,
    locale: themeConfig.value.globalI18n,
    fallbackLocale: zhcnLocale.name,
    messages,
});
