import request from '@/utils/request'
import {AxiosResponse} from "axios";
import {Param, Result} from '@/api/modules/menu/interface'

export default {
    /**查询当前登录用户菜单列表*/
    async queryCurLoginUserMenuList(): Promise<Result.QueryCurLoginUserMenuList> {
        return await request.post<Param.QueryCurLoginUserMenuList, AxiosResponse<Result.QueryCurLoginUserMenuList>, any>('/api/menu/queryCurLoginUserMenuList', {}, {})
            .then(function (res) {
                return res.data;
            });
    }
}
