import {User} from "@/model";

export namespace Param {
    export class QryCurLoginUser {
    }
}

export namespace Result {
    export class QryCurLoginUser {
        code: number;
        msg: string;
        data: {
            user: User
        }
    }
}

