import {Token} from "@/model";

export namespace Param {
    export class Login {
        login_name: string;
        password: string;
    }
}

export namespace Result {
    export class Login {
        code: number;
        msg: string;
        data: {
            token: Token
        }
    }
}

