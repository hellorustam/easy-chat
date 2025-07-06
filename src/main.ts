import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.ts'
import { APP_TITLE } from './utils/meta.ts'

document.title = APP_TITLE

createApp(App).use(router).mount('#app')
