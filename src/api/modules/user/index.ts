import request from '@/utils/request'
import {AxiosResponse} from "axios";
import {Param, Result} from "@/api/modules/user/interface";

export default {
    /**查询当前登录用户信息*/
    async queryCurLoginUser(): Promise<Result.QryCurLoginUser> {
        return await request.post<Param.QryCurLoginUser, AxiosResponse<Result.QryCurLoginUser>, any>('/api/user/qryCurLoginUser', {}, {})
            .then(function (res) {
                return res.data;
            });
    }
}
