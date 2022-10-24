import {RouteRecordRaw} from 'vue-router';
import store from '@/store';

export const routes: Array<RouteRecordRaw> = [
  {
        path: '/',
        name: '/',
        component: () => import('@/layout/index.vue'),
        redirect: import.meta.env.VITE_INDEX as string,
        children: [
            {
                path: "/index",
                name: 'index',
                component: () => import('@/views/index/index.vue'),
                meta: {
                    title: '首页', // 标题
                    auth: true, // 验证权限
                    link: false, // 外部链接地址
                    hide: false, // 隐藏菜单
                    keepAlive: true, // 保存组件
                    iframe: false, // 独立界面
                    icon: 'iconfont icon-index' // 图标
                }
            }, {
                path: "/user",
                name: 'user',
                component: () => import('@/views/user/index.vue'),
                meta: {
                    title: '用户管理', // 标题
                    auth: false, // 验证权限
                    link: false, // 外部链接地址
                    hide: true, // 隐藏菜单
                    keepAlive: true, // 保存组件
                    iframe: false, // 独立界面
                    icon: 'iconfont icon-index' // 图标
                }
            }
        ]
    }, {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue'),
        meta: {
            title: '登录', // 标题
            auth: false, // 验证权限
        }
    }
];

/**判断路由列表中是否存在当前路由*/
export function hasNecessaryRoute(to){
    console.log(store);
    console.log(store.getters['routeList/length']);
    console.log(store.getters['routeList/test'](1));
    return false;
}

/**
 * 初始化路由列表
 * */
export function initRouteList(){

}
