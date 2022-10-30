/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string; // 标题
    readonly VITE_TOKEN: string; // 标题
    readonly VITE_PORT: number // 启动端口
    readonly VITE_LOGIN: string; // 登录界面
    readonly VITE_HOME: string; // 首页
    readonly VITE_PUBLIC_PATH: string;
    readonly VITE_APP_USE_MOCK: boolean;
    readonly VITE_LOG: boolean;
}

declare module '*.vue' {
    import type {DefineComponent} from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}
