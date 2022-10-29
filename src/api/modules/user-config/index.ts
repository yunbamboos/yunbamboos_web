import request from '@/utils/request'
import {AxiosResponse} from "axios";
import {Param, Result} from "@/api/modules/user-config/interface";

export default {
    /**查询当前登录用户信息*/
    async queryCurLoginUserConfig(): Promise<Result.QueryCurLoginUserConfig> {
        return await request.post<Param.QueryCurLoginUserConfig, AxiosResponse<Result.QueryCurLoginUserConfig>, any>('/api/user-config/queryCurLoginUserConfig', {}, {})
            .then(function (res) {
                return res.data;
            });
    }
}
