import {RouteRecordRaw} from 'vue-router';
import {ElMessage} from 'element-plus';
import store from '@/store';
import loading from '@/utils/loading';
import {setAddRoute, setMenuToStore} from "@/router/index";
import {menuToRoute} from "@/router/menuToRoute";
import {Route} from "@/model";
import {auth} from '@/router/auth';

export const routes: Array<Route> = [
    {
        path: '/',
        name: '/',
        component: () => import('@/layout/index.vue'),
        redirect: import.meta.env.VITE_HOME,
        meta: {
            title: '', // 标题
            link: '', // 外部链接地址
            hide: true, // 隐藏菜单
            cache: false, // 保存组件
            iframe: false, // 独立界面
            icon: '' // 图标
        },
        children: []
    }
];

/**
 * 定义默认路由
 * 此路由不要动，前端添加路由的话，请在 `routes 数组` 中添加
 * @description 前端控制直接改 routes 中的路由，后端控制不需要修改，请求接口路由数据时，会覆盖 routes 第一个顶级 children 的内容（全屏，不包含 layout 中的路由出口）
 * @returns 返回路由菜单数据
 */
export const defaultRoutes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue'),
        meta: {
            title: '登录', // 标题
            auth: false // 验证权限
        }
    }
];

const win: any = window;

/**判断路由列表中是否存在当前路由*/
export function hasNecessaryRoute() {
    return store.getters['routeList/length'] !== 0;
}

/**
 * 初始化路由列表
 * */
export async function initRouteList() {
    // 界面 loading 动画开始执行
    if (win.nextLoading === undefined) loading.start();
    // 验证失败 停止执行下一步
    if (!await auth()) return false;
    // 触发初始化用户信息
    await store.dispatch('user/setUserFromSession');
    // 获取菜单数据
    const menus = await getMenu();
    // 处理路由（component），添加到routes（@/router/route）第一个顶级 children 的路由
    routes[0].children = menuToRoute(menus);
    // 添加动态路由
    await setAddRoute();
    await setMenuToStore();
    loading.done();
}

export async function getMenu() {
    let list = store.getters['menuList/getAll']();
    if (list && list.length > 0) {
        return list;
    } else {
        return await store.dispatch('menuList/queryCurLoginUserMenuList').then(list => {
            return list;
        }, msg => {
            ElMessage.error("加载菜单失败: " + msg);
            store.dispatch('token/clearToken');
            return [];
        });
    }
}


