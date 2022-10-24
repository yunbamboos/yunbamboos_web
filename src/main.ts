import {createApp} from 'vue';
import App from './App.vue';
import router from '@/router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import '@/theme/index.scss';
import store from '@/store';

console.log("环境变量=>", import.meta.env);
console.log("store=>", store.state);

const app = createApp(App);
app.use(router);
app.use(store);
app.use(
    ElementPlus, {
        locale: zhCn,
    }
);
app.mount('#app');
