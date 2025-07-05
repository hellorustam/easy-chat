import { createApp } from 'vue'
import App from './App.vue'
import { APP_TITLE } from './utils/meta.ts'

document.title = APP_TITLE

createApp(App).mount('#app')
