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
}

/**全局统一设置*/
export class Config {
    // 布局切换：可选值"<defaults|classic|transverse|columns>"，默认 defaults
    layout: string;
    // 界面设置
    setting: Setting;
    // 显示设置
    display: Display;
}
