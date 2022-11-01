import {logo} from "@/components/svg-icon/svg/icon/logo";
import {home} from "@/components/svg-icon/svg/icon/home";
import {attention} from "@/components/svg-icon/svg/icon/attention";
import {expand} from "@/components/svg-icon/svg/icon/expand";
import {collapse} from "@/components/svg-icon/svg/icon/collapse";
import {arrow} from "@/components/svg-icon/svg/icon/arrow";
import {full_screen} from "@/components/svg-icon/svg/icon/full_screen";
import {cancel_full_screen} from "@/components/svg-icon/svg/icon/cancel_full_screen";
import {notice} from "@/components/svg-icon/svg/icon/notice";

import {theme_skin} from "@/components/svg-icon/svg/icon/theme_skin";
import {search} from "@/components/svg-icon/svg/icon/search";
import {lang_zh} from "@/components/svg-icon/svg/icon/lang_zh";
import {lang_tw} from "@/components/svg-icon/svg/icon/lang_tw";
import {lang_en} from "@/components/svg-icon/svg/icon/lang_en";
import {size} from "@/components/svg-icon/svg/icon/size";

const icon = {
    // logo
    logo: logo,
    // 首页
    home: home,
    // 关注
    attention: attention,
    // 侧边栏 展开 收缩
    expand: expand,
    collapse: collapse,
    // 向下箭头 头像边使用
    arrow: arrow,
    // 全屏 取消全屏
    full_screen: full_screen,
    cancel_full_screen: cancel_full_screen,
    // 通知 小铃铛
    notice: notice,
    // 主题皮肤设置
    theme_skin: theme_skin,
    // 搜索
    search: search,
    // 语言
    'zh-cn': lang_zh,
    'zh-tw': lang_tw,
    'en': lang_en,
    size: size,
}

export function getPath(name) {
    return icon[name];
}