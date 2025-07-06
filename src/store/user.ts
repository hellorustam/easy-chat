import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
	const user = ref(null)
	const setUser = u => (user.value = u)
	const clearUser = () => (user.value = null)

	return { user, setUser, clearUser }
})
