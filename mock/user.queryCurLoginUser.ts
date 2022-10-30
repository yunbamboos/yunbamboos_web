export default [
    {
        url: '/api/user/queryCurLoginUser',
        method: 'post',
        timeout: 1000,
        statusCode: 200,
        response: () => {
            // 响应内容
            return {
                code: 200,
                msg: '查询成功',
                data: {
                    user: {
                        user_id: 1, // @word()是mockjs的语法
                        nick_name: 'yunzhu', // refresh_token是用来重新生成token的
                        image_id: 1,
                    }
                },
            }
        },
    }
]
