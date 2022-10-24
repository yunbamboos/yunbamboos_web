import {createRouter, createWebHistory} from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import {APP_TITLE} from '@/constant';
import {routes, hasNecessaryRoute, initRouteList} from '@/router/route';
import {auth} from '@/router/auth';
import store from '@/store';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: '/',
            redirect: import.meta.env.VITE_LOGIN_OPEN_INDEX as string,
        }
    ]
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
export function setAddRoute() {
    setFilterRouteEnd().forEach((route) => {
        const routeName: any = route.name;
        console.log("router.hasRoute("+routeName+")", router.hasRoute(routeName));
        if (!router.hasRoute(routeName)) router.addRoute(route);
    });
    console.log("routes",routes);
    console.log("router",router);
}

/**提取路由添加到菜单中*/
export function setMenuToStore() {
    store.dispatch('routesList/setRoutesList', routes[0].children).then(r => {});
}

// 路由加载前
router.beforeEach(async to => {
    document.title = (title => {
        return (!!title) ? (`${title} - ${APP_TITLE}`) : APP_TITLE;
    })(!!to.meta && to.meta.title);
    NProgress.start();
    // 判断是否需要验证权限
    if (to.meta.auth) {
        if (await auth()) {
            if (!hasNecessaryRoute(to)) {
                await initRouteList();
            }
        } else {
            return import.meta.env.VITE_LOGIN;
        }
    }
});
// 路由加载完成
router.afterEach(() => {
    NProgress.done();
});

// 导出路由
export default router;
