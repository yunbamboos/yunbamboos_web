import {store} from '@/store';
import {TOKEN} from '@/constant'
import {Session} from '@/utils/storage';
import {NextLoading} from '@/utils/loading';
import {routes} from '@/router/route';
import {setAddRoute} from '@/router';
import {Menu} from '@/api/menu';

const win: any = window;

const layoutModules: any = import.meta.glob('../layout/routerView/*.{vue,tsx}');
const viewsModules: any = import.meta.glob('../views/**/*.{vue,tsx}');
/**
 * 获取目录下的 .vue、.tsx 全部文件
 */
const dynamicViewsModules: Record<string, Function> = Object.assign({}, {...layoutModules}, {...viewsModules});

/**初始化菜单路由*/
export async function initBackEndControlRoutes() {
    // 界面 loading 动画开始执行
    if (win.nextLoading === undefined) NextLoading.start();
    // 触发初始化用户信息
    await store.dispatch('userInfo/setUserInfo');
    // 获取路由菜单数据
    const res = await getRoutes();
    if (res.code !== 200) {
        return false;
    }
    // 处理路由（component），添加到routes（@/router/route）第一个顶级 children 的路由
    routes[0].children = await backEndComponent(res.data);
    // 添加动态路由
    await setAddRoute();
}

/**
 * 请求后端路由菜单接口
 */
export function getRoutes() {
    return Menu();
}

/**
 * 后端路由 component 转换
 */
export function backEndComponent(routes: any) {
    if (!routes) return;
    return routes.map((item: any) => {
        if (item.component) item.component = dynamicImport(dynamicViewsModules, item.component as string);
        item.children && backEndComponent(item.children);
        return item;
    });
}

/**
 * 后端路由 component 转换函数
 */
export function dynamicImport(dynamicViewsModules: Record<string, Function>, component: string) {
    const keys = Object.keys(dynamicViewsModules);
    const matchKeys = keys.filter((key) => {
        const k = key.replace(/..\/views|../, '');
        return k.startsWith(`${component}`) || k.startsWith(`/${component}`);
    });
    if (matchKeys?.length === 1) {
        const matchKey = matchKeys[0];
        return dynamicViewsModules[matchKey];
    }
    if (matchKeys?.length > 1) {
        return false;
    }
}
