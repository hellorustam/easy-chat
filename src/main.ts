import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import auth from './firebase/index.ts'
import router from './router/router.ts'
import { APP_TITLE } from './utils/meta.ts'

document.title = APP_TITLE
auth

// ---

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.mount('#app')
