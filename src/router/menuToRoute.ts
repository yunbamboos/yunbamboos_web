import {menu} from "@/api";
import {Menu, RouteList} from "@/model";

const layoutModules: any = import.meta.glob('../layout/routerView/*.{vue,tsx}');
const viewsModules: any = import.meta.glob('../views/**/*.{vue,tsx}');
/**
 * 获取目录下的 .vue、.tsx 全部文件
 */
const dynamicViewsModules: Record<string, Function> = Object.assign({}, {...layoutModules}, {...viewsModules});

/**加载菜单服务*/
export async function getMenuFromService() {
    return menu.queryCurLoginUserMenuList();
}

/**
 * 菜单Menu转换路由Route
 */
export function menuToRoute(menuList: Array<Menu>) {
    if (!menuList) return;
    return menuList.map((menu: Menu) => {
        // if (item.component) item.component = dynamicImport(dynamicViewsModules, item.component as string);
        // item.children && menuToRouteComponent(item.children);
        let route = new Route();

        return route;
    });
}



/**
 * 路由 component 转换函数
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