export class Route {
    menu_id?: string;
    name?: string;
    path?: string;
    component?: any;
    redirect?: any;
    meta?: RouteMeta | any;
    children?: Array<Route>;
}

export class RouteMeta {
    title?: string;
    link?: string;
    hide?: boolean;
    cache?: boolean;
    iframe?: boolean;
    icon?: string;
}

export class RouteList {
    list: Array<Route>;
}
