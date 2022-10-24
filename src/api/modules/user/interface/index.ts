import {User} from "@/model";

export namespace Param {
    export class QueryCurLoginUser {
    }
}

export namespace Result {
    export class QueryCurLoginUser {
        code: number;
        msg: string;
        data: {
            user: User
        }
    }
}

