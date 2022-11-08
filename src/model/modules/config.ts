/**全局统一设置*/
export class Config {
    drawer: boolean;  // 布局配置

    primary: string; // 默认 primary 主题颜色
    bg: string; // 默认背景颜色
    color: string; // 默认字体颜色
    border: string; // 边框颜色

    /**顶栏设置*/
    topBarBg: string; // 顶栏背景色
    topBarBgGradual: boolean; // 背景渐变色
    topBarDefaultColor: string; // 顶栏默认字体颜色
    topBarSelectedColor: string; // 顶栏选中字体颜色
    topBarSelectedBg: string; // 顶栏选中背景

    /**菜单栏配置*/
    asideMenuBg: string;
    asideMenuBgGradual: boolean;
    asideMenuDefaultColor: string;
    asideMenuSelectedColor: string;
    asideMenuSelectedBg: string;

    layout: string; // 布局切换：可选值"<defaults|classic|transverse|columns>"，默认 defaults

    /** 界面设置*/
    // 是否开启菜单水平折叠效果
    collapse: boolean;
    // 是否开启菜单手风琴效果
    uniqueOpened: boolean;
    // 是否开启固定 Header
    fixedHeader: boolean;

    /**显示设置*/
    // 是否显示logo
    logo: boolean;
    // 是否开启 breadcrumb，经典、横向布局不显示
    breadcrumb: boolean;
    // 是否开启 breadcrumb 图标
    breadcrumbIcon: boolean;

    // 默认初始语言，可选值"<zh-cn|en|zh-tw>"，默认 zh-cn
    globalI18n: string;
    // 默认全局组件大小，可选值"<large|'default'|small>"，默认 'large'
    globalComponentSize: string;
}
