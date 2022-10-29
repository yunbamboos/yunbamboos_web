import {UserConfig} from "@/model";

export namespace Param {
    export class QueryCurLoginUserConfig {
    }
}

export namespace Result {
    export class QueryCurLoginUserConfig {
        code: number;
        msg: string;
        data: {
            user_configs: Array<UserConfig>
        }
    }
}

