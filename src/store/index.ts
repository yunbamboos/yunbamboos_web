import {createStore, createLogger } from 'vuex';
import {Token, Config, RouteList, User} from '@/model';

const debug = import.meta.env.VITE_LOG;

const modulesFiles = import.meta.globEager('./modules/*.ts');
const pathList: string[] = [];

for (const path in modulesFiles) {
    pathList.push(path);
}

const modules = pathList.reduce((modules: { [x: string]: any }, modulePath: string) => {
    const moduleName = modulePath.replace(/^\.\/modules\/(.*)\.\w+$/, '$1');
    const value = modulesFiles[modulePath];
    modules[moduleName] = value.default;
    return modules;
}, {});

export class RootStoreTypes {
    token: Token;
    config: Config;
    routeList: RouteList;
    user: User;
}

export default createStore<RootStoreTypes>({
    modules,
    strict: true,
    plugins: debug ? [createLogger()] : []
});

