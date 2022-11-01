import {UserImage} from "@/model";

export namespace Param {
    export class QueryUserImageBase64 {
        user_id: number
    }
}

export namespace Result {
    export class QueryUserImageBase64 {
        code: number;
        msg: string;
        data: {
            user_image: UserImage
        }
    }
}

