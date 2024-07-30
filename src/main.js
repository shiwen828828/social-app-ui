import { createApp } from 'vue'
import App from './App.vue'
import './mock/login'
import router from './router'; // 导入路由器
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
createApp(App).use(router).use(ElementPlus).mount('#app')
