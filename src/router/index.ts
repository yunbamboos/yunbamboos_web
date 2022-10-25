import {createRouter, createWebHistory} from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import {INDEX} from '@/constant';
import {defaultRoutes, routes, hasNecessaryRoute, initRouteList} from '@/router/route';
import {auth} from '@/router/auth';
import store from '@/store';

const router = createRouter({
    history: createWebHistory(),
    routes: defaultRoutes
});

/**
 * 定义404界面
 */
const pathMatch = {
    path: '/:path(.*)*',
    redirect: '/404',
    meta: {
        hide: true
    }
};

export function setFilterRouteEnd() {
    let filterRouteEnd: any = routes;
    filterRouteEnd[0].children = [...filterRouteEnd[0].children, {...pathMatch}];
    return filterRouteEnd;
}

/**
 * 添加动态路由
 */
export async function setAddRoute() {
    setFilterRouteEnd().forEach((route) => {
        router.addRoute(route);
    });
}

/**提取路由添加到菜单中*/
export async function setMenuToStore() {
    await store.dispatch("routeList/addAll", routes[0].children);
}

// 路由加载前
router.beforeEach(async (to, from, next) => {
    NProgress.configure({showSpinner: false});
    if (to.meta.title) NProgress.start();
    const token = await auth();
    if (to.path === '/login' && !token) {
        next();
        NProgress.done();
    } else {
        if (!token) {
            if(to.path == '/'){
                next('/login');
            } else {
                next(`/login?redirect=${to.path}&params=${JSON.stringify(to.query ? to.query : to.params)}`);
            }
            NProgress.done();
        } else if (token && to.path === '/login'){
            next(INDEX);
            NProgress.done();
        }else {
            if (!hasNecessaryRoute()) {
                await initRouteList();
                next({ ...to, replace: true });
            }else {
                next();
            }
        }
    }
});
// 路由加载完成
router.afterEach(() => {
    NProgress.done();
});

// 导出路由
export default router;
