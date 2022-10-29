export default [
    {
        url: '/api/user-config/queryCurLoginUserConfig',
        method: 'post',
        timeout: 2001,
        statusCode: 200,
        response: () => {
            // 响应内容
            return {
                code: 200,
                message: '请求成功',
                data: {
                    user_config_list: [
                        {
                            user_id: '100000',
                            group: '',
                            key: 'primary',
                            value: '#e20b0b',
                        }
                    ]
                },
            }
        },
    }
]
