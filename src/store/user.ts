import type { User as FirebaseUser } from 'firebase/auth'
import { defineStore } from 'pinia'
import { ref } from 'vue'

interface User {
	uid: string
	email: string | null
	displayName: string | null
	photoURL: string | null
}

export const useUserStore = defineStore('user', () => {
	const user = ref<User | null>(null)

	const setUser = async (firebaseUser: FirebaseUser) => {
		try {
			user.value = {
				uid: firebaseUser.uid,
				email: firebaseUser.email,
				displayName: firebaseUser.displayName,
				photoURL: firebaseUser.photoURL,
			}
		} catch (error) {
			console.log('Error setting user:', error)
		}
	}

	const clearUser = () => (user.value = null)

	return { user, setUser, clearUser }
})
