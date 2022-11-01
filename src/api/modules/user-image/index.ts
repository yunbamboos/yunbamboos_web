import request from '@/utils/request'
import {AxiosResponse} from "axios";
import {Param, Result} from "@/api/modules/user-image/interface";

export default {
    /**查询当前登录用户信息*/
    async queryUserImageBase64(data:Param.QueryUserImageBase64): Promise<Result.QueryUserImageBase64> {
        return await request.post<Param.QueryUserImageBase64, AxiosResponse<Result.QueryUserImageBase64>, any>('/api/user-image/queryUserImageBase64', data, {})
            .then(function (res) {
                return res.data;
            });
    }
}
