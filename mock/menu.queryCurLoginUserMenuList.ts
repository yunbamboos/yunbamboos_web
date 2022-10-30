export default [
    {
        url: '/api/menu/queryCurLoginUserMenuList',
        method: 'post',
        timeout: 1000,
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
                            path: '/home',
                            name: 'home',
                            component: '/home/index.vue',
                            title: 'menu.home',
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
                            title: 'menu.attention',
                            link: 'false',
                            hide: false,
                            keep_alive: true,
                            iframe: 'false',
                            icon: 'attention'
                        }
                    ]
                },
            }
        },
    }
]
