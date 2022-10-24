export class Menu {
    menu_id: string;
    name: string;
    path: string;
    component: string;
    title: string;
    link: string;
    hide: boolean;
    keep_alive: boolean;
    iframe: string;
    icon: string;
    parent_menu_id: string;
    children: Array<Menu>;
}

