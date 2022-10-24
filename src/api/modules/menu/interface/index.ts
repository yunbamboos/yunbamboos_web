import {Token} from "@/model";

export namespace Param {
    export class QueryCurLoginUserMenuList {
    }
}

export namespace Result {
    export class QueryCurLoginUserMenuList {
        code: number;
        msg: string;
        data: {
            token: Token
        }
    }
}

