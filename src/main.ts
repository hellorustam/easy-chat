import { onAuthStateChanged } from 'firebase/auth'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import auth from './firebase/index.ts'
import router from './router/router.ts'
import { useUserStore } from './store/user.ts'
import { APP_TITLE } from './utils/meta.ts'

document.title = APP_TITLE
// auth

// ---

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
// app.mount('#app')

onAuthStateChanged(auth, firebaseUser => {
	const userStore = useUserStore()
	if (firebaseUser) {
		userStore.setUser(firebaseUser)
	} else {
		userStore.clearUser()
	}

	app.mount('#app') // ⚠️ Только после получения user
})
