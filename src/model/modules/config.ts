/**界面设置*/
class Setting {
    // 是否开启菜单水平折叠效果
    collapse: boolean;
    // 是否开启菜单手风琴效果
    uniqueOpened: boolean;
    // 是否开启固定 Header
    fixedHeader: boolean;
}

/**显示设置*/
class Display {
    // 是否显示logo
    logo: boolean;
    // 是否开启 breadcrumb，经典、横向布局不显示
    breadcrumb: boolean;
    // 是否开启 breadcrumb 图标
    breadcrumbIcon: boolean;
}

/**全局统一设置*/
export class Config {
    // 默认 primary 主题颜色
    primary: string;
    // 是否开启深色模式
    dark: boolean;
    // 布局切换：可选值"<defaults|classic|transverse|columns>"，默认 defaults
    layout: string;
    // 界面设置
    setting: Setting;
    // 显示设置
    display: Display;
    // 默认初始语言，可选值"<zh-cn|en|zh-tw>"，默认 zh-cn
    globalI18n: string;
    // 默认全局组件大小，可选值"<large|'default'|small>"，默认 'large'
    globalComponentSize: string;
}
