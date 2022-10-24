import request from '@/utils/request'
import {AxiosResponse} from "axios";
import {Param, Result} from "@/api/modules/user/interface";

export default {
    /**查询当前登录用户信息*/
    async queryCurLoginUser(): Promise<Result.QueryCurLoginUser> {
        return await request.post<Param.QueryCurLoginUser, AxiosResponse<Result.QueryCurLoginUser>, any>('/api/user/queryCurLoginUser', {}, {})
            .then(function (res) {
                return res.data;
            });
    }
}
