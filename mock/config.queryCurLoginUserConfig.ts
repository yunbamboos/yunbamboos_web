export default [
    {
        url: '/api/config/queryCurLoginUserConfig',
        method: 'post',
        timeout: 1000,
        statusCode: 200,
        response: () => {
            // 响应内容
            return {
                code: 200,
                message: '请求成功',
                data: {
                    user_config: [
                        {
                            menu_id: '100000',
                            path: '/index',
                            name: 'index',
                            component: '/index/index.vue',
                            title: '首页',
                            link: 'false',
                            hide: false,
                            keep_alive: true,
                            iframe: 'false',
                            icon: 'home'
                        }
                    ]
                },
            }
        },
    }
]
