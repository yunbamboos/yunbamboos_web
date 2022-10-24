import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { viteMockServe } from 'vite-plugin-mock';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    const root = process.cwd();
    const isBuild = command === 'build';

    const env = loadEnv(mode, process.cwd());
    const viteEnv = wrapperEnv(env);
    // @ts-ignore
    const { VITE_PORT, VITE_PUBLIC_PATH } = viteEnv;
    return {
        root,
        base: VITE_PUBLIC_PATH || '/',
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src'),
            },
        },
        plugins: createVitePlugins(viteEnv, isBuild),
        build: {
            target: 'modules',
            outDir: 'dist',
            assetsDir: 'assets',
            minify: 'terser' // 混淆器
        },
        server: {
            host: '0.0.0.0',
            port: VITE_PORT,
            proxy: {
                '/api': {
                    target: 'http://192.168.2.121:3000',   //代理接口
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, '')
                }
            },
        }
    };
});

export function wrapperEnv(envOptions) {
    if (!envOptions) return {};
    const ret = {};
    for (const key in envOptions) {
        let val = envOptions[key];
        if (['true', 'false'].includes(val)) {
            val = val === 'true';
        }
        if (['VITE_PORT'].includes(key)) {
            val = +val;
        }
        if (key === 'VITE_PROXY' && val) {
            try {
                val = JSON.parse(val.replace(/'/g, '"'));
            } catch (error) {
                val = '';
            }
        }
        ret[key] = val;
        if (typeof key === 'string') {
            process.env[key] = val;
        } else if (typeof key === 'object') {
            process.env[key] = JSON.stringify(val);
        }
    }
    return ret;
}

export function createVitePlugins(viteEnv, isBuild) {
    const plugins = [
        vue()
    ];
    viteEnv?.VITE_APP_USE_MOCK && plugins.push(configMockPlugin(isBuild));
    return plugins;
}

export function configMockPlugin(isBuild) {
    return viteMockServe({
        ignore: /^_/, // 忽略以下划线`_`开头的文件
        mockPath: 'mock', // 指定mock目录中的文件全部是mock接口
        supportTs: false, // 打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件。
        localEnabled: !isBuild, // 开发打包开关
        prodEnabled: isBuild, // 生产打包开关
        watchFiles: true, // 监视文件更改
        injectCode: `
            import { setupProdMockServer } from '../mock/_createProductionServer';
            setupProdMockServer();
        `,
    });
}
