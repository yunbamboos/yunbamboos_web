export default [
    {
        url: '/api/login/login',
        method: 'post',
        timeout: 1000,
        statusCode: 200,
        response: ({body}) => {
            // 响应内容
            return +body.password === 123456
                ? {
                    code: 200,
                    msg: '登录成功',
                    data: {
                        token: {
                            token_id: '@word(50, 100)', // @word()是mockjs的语法
                        }
                    },
                }
                : {
                    code: 400,
                    msg: '密码错误，请输入123456',
                }
        },
    }
]
