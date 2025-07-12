import { onAuthStateChanged } from 'firebase/auth'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import auth from './firebase/index.ts'
import router from './router/router.ts'
import { useUserStore } from './store/user.ts'
import { APP_TITLE } from './utils/meta.ts'

document.title = APP_TITLE

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

let appIsMounted = false

onAuthStateChanged(auth, firebaseUser => {
	const userStore = useUserStore()

	if (firebaseUser) {
		userStore.setUser(firebaseUser)
	} else {
		userStore.clearUser()
	}

	if (!appIsMounted) {
		app.mount('#app')
		appIsMounted = true
	}
})
