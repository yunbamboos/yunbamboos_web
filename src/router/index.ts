import {createRouter, createWebHistory} from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import {APP_TITLE} from '@/constant';
import {routes, hasNecessaryRoute, initRouteList} from '@/router/route';
import {auth} from '@/router/auth';

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

/**
 * 添加动态路由
 */
export async function setAddRoute() {
    // await setFilterRouteEnd().forEach((route: RouteRecordRaw) => {
    //     const routeName: any = route.name;
    //     if (!router.hasRoute(routeName)) router.addRoute(route);
    // });
}

// 路由加载前
router.beforeEach(async to => {
    document.title = (title => {
        return (!!title) ? (`${title} - ${APP_TITLE}`) : APP_TITLE;
    })(!!to.meta && to.meta.title);
    NProgress.start();
    // 判断是否需要验证权限
    if(to.meta.auth){
        if(await auth()){
            if(!hasNecessaryRoute(to)){
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
