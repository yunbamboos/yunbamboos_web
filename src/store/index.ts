import {createStore, createLogger } from 'vuex';
import {RootStoreTypes} from '@/model';

const debug = import.meta.env.ViTE_LOG;

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

export default createStore<RootStoreTypes>({
    modules,
    strict: true,
    plugins: debug ? [createLogger()] : []
});

