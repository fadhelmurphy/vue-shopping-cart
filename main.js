import { createApp } from 'vue'
import App from './src/App.vue'
import './index.css'
import store from './src/store'
import router from './src/router'

createApp(App).use(router).use(store).mount('#app')
