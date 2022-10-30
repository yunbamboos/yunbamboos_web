import {createApp} from 'vue';
import App from './App.vue';
import router from '@/router';
import ElementPlus from 'element-plus';
import { i18n } from '@/i18n';

import 'element-plus/dist/index.css';
import '@/theme/index.scss';
import store from '@/store';

import mitt from 'mitt';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(
    ElementPlus, {
        i18n: i18n.global.t
    }
);
app.use(i18n);
app.mount('#app');
app.config.globalProperties.mittBus = mitt();

console.log(app);
console.log("环境变量=>", import.meta.env);
console.log("store=>", store.state);