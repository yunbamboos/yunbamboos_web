import request from '@/utils/request'
import {AxiosResponse} from "axios";
import {Param, Result} from '@/api/modules/login/interface'

export default {
    async login(data: Param.Login): Promise<Result.Login> {
        return await request.post<Param.Login, AxiosResponse<Result.Login>, any>('/api/login', data, {})
            .then(function (res) {
                return res.data;
            });
    }
}
