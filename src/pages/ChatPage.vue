<script setup lang="ts">
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { onMounted, ref } from 'vue'
import BubbleItem from '../components/BubbleItem.vue'
import TextField from '../components/TextField.vue'
import router from '../router/router'
import { useUserStore } from '../store/user.ts'

const { user } = useUserStore()

const isLoggedIn = ref(false)

let auth

onMounted(() => {
	auth = getAuth()
	onAuthStateChanged(auth, user => {
		if (user) {
			isLoggedIn.value = true
			console.log('User is logged in:', user.displayName)
		} else {
			isLoggedIn.value = false
			console.log('User is not logged in')
			router.push('/')
		}
	})
})

const handleSignOut = async () => {
	const auth = getAuth()
	try {
		await signOut(auth)
		console.log('User signed out successfully')
		router.push('/')
	} catch (error) {
		console.error('Error signing out:', error)
	}
}
</script>

<template>
	<div class="chat-wrapper">
		<div v-if="user">Добро пожаловать {{ user.displayName }}</div>
		<button @click="handleSignOut" v-if="isLoggedIn">Выйти</button>
		<BubbleItem />
		<TextField />
	</div>
</template>
