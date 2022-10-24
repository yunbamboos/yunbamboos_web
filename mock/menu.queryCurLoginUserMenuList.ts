/**
 * 路由meta对象参数说明
 * meta: {
 *      title:          菜单栏及 tagsView 栏、菜单搜索名称（国际化）
 *      isLink：        是否超链接菜单，开启外链条件，`1、isLink:true 2、链接地址不为空`
 *      isHide：        是否隐藏此路由
 *      isKeepAlive：   是否缓存组件状态
 *      isAffix：       是否固定在 tagsView 栏上
 *      isIframe：      是否内嵌窗口，，开启条件，`1、isIframe:true 2、链接地址不为空`
 *      roles：         当前路由权限标识，取角色管理。控制路由显示、隐藏。超级管理员：admin 普通角色：common
 *      icon：          菜单、tagsView 图标，阿里：加 `iconfont xxx`，fontawesome：加 `fa xxx`
 * }
 */

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
                data: [
                    {
                        path: "/index",
                        name: 'index',
                        component: '/index/index.vue',
                        meta: {
                            title: '首页',
                            isLink: false,
                            isHide: false,
                            isKeepAlive: true,
                            isAffix: false,
                            isIframe: false,
                            roles: ['admin'],
                            icon: 'iconfont icon-index'
                        }
                    }, {
                        path: "/favorite",
                        name: 'favorite',
                        component: '/favorite/index.vue',
                        meta: {
                            title: '我的收藏',
                            isLink: false,
                            isHide: false,
                            isKeepAlive: true,
                            isAffix: false,
                            isIframe: false,
                            roles: ['admin'],
                            icon: 'iconfont icon-favorite'
                        }
                    }, {
                        path: "/movie",
                        name: 'movie',
                        component: '/movie/index.vue',
                        meta: {
                            title: '电影',
                            isLink: false,
                            isHide: false,
                            isKeepAlive: true,
                            isAffix: false,
                            isIframe: false,
                            roles: ['admin'],
                            icon: 'iconfont icon-movie'
                        }
                    }, {
                        path: "/history",
                        name: 'history',
                        component: '/movie/index.vue',
                        meta: {
                            title: '播放历史',
                            isLink: false,
                            isHide: false,
                            isKeepAlive: true,
                            isAffix: false,
                            isIframe: false,
                            roles: ['admin'],
                            icon: 'iconfont icon-history'
                        }
                    }, {
                        path: "/rating_record",
                        name: 'rating_record',
                        component: '/movie/index.vue',
                        meta: {
                            title: '评分记录',
                            isLink: false,
                            isHide: false,
                            isKeepAlive: true,
                            isAffix: false,
                            isIframe: false,
                            roles: ['admin'],
                            icon: 'iconfont icon-rating_record'
                        }
                    }, {
                        path: "/comment_record",
                        name: 'comment_record',
                        component: '/movie/index.vue',
                        meta: {
                            title: '评论记录',
                            isLink: false,
                            isHide: false,
                            isKeepAlive: true,
                            isAffix: false,
                            isIframe: false,
                            roles: ['admin'],
                            icon: 'iconfont icon-comment_record'
                        }
                    }, {
                        path: "/user",
                        name: 'user',
                        component: '/user/index.vue',
                        meta: {
                            title: '用户管理',
                            isLink: false,
                            isHide: false,
                            isKeepAlive: true,
                            isAffix: false,
                            isIframe: false,
                            roles: ['admin'],
                            icon: 'iconfont icon-user'
                        }
                    }, {
                        path: "/rating",
                        name: 'rating',
                        component: '/user/index.vue',
                        meta: {
                            title: '评分管理',
                            isLink: false,
                            isHide: false,
                            isKeepAlive: true,
                            isAffix: false,
                            isIframe: false,
                            roles: ['admin'],
                            icon: 'iconfont icon-rating'
                        }
                    }, {
                        path: "/comment",
                        name: 'comment',
                        component: '/user/index.vue',
                        meta: {
                            title: '评论管理',
                            isLink: false,
                            isHide: false,
                            isKeepAlive: true,
                            isAffix: false,
                            isIframe: false,
                            roles: ['admin'],
                            icon: 'iconfont icon-comment'
                        }
                    }
                ],
            }
        },
    }
]
