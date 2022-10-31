export default [
    {
        url: '/api/menu/queryCurLoginUserMenuList',
        method: 'post',
        timeout: 1000,
        statusCode: 200,
        response: () => {
            // 响应内容
            return {
                "msg": "OK",
                "code": 200,
                "data": {
                    "menu_list": [
                        {
                            "path": "/home",
                            "component": "/home/index.vue",
                            "hide": false,
                            "cache": false,
                            "name": "home",
                            "icon": "home",
                            "iframe": false,
                            "title": "menu.home",
                            "menu_id": "100000",
                            "parent_menu_id": "0"
                        },
                        {
                            "path": "/my/attention",
                            "component": "/my/attention/index.vue",
                            "hide": false,
                            "cache": false,
                            "name": "attention",
                            "icon": "attention",
                            "iframe": false,
                            "title": "menu.attention",
                            "menu_id": "101000",
                            "parent_menu_id": "0"
                        }
                    ]
                }
            }
        },
    }
]
