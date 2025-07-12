<script setup lang="ts">
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { onMounted, ref } from 'vue'
import BubbleItem from '../components/BubbleItem.vue'
import Profile from '../components/Profile.vue'
import TextField from '../components/TextField.vue'
import router from '../router/router'

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
		<Profile v-if="isLoggedIn" />
		<BubbleItem />
		<TextField />
	</div>
</template>
