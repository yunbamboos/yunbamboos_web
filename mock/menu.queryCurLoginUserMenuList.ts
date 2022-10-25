export default [
    {
        url: '/api/menu/queryCurLoginUserMenuList',
        method: 'post',
        timeout: 100,
        statusCode: 200,
        response: () => {
            // 响应内容
            return {
                code: 200,
                message: '请求成功',
                data: {
                    menu_list: [
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
                        },
                        {
                            menu_id: '100011',
                            path: '/my/attention',
                            name: 'attention',
                            component: '/my/attention/index.vue',
                            title: '关注',
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
