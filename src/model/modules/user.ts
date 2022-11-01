export class User {
    user_id: number;
    nick_name: string;
    image_id: number;
}

export class UserConfig {
    user_id: number;
    attr: number;
    value: any;
}

export class UserImage {
    user_id: number;
    image: string;
}