// 全局统一设置
import {Authorization} from "@/model";

export class Config {
    // 统一认证信息
    authorization: Authorization;
    // 是否开启固定 Header
    fixedHeader: boolean;
    // Header 的 高度
    headerHeight: string;
}
