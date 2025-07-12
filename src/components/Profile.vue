<script setup lang="ts">
import { getAuth, signOut } from 'firebase/auth'
import { storeToRefs } from 'pinia'
import logOutIcon from '../assets/logout.svg'
import router from '../router/router'
import { useUserStore } from '../store/user.ts'

const userStore = useUserStore()
const { user } = storeToRefs(userStore)

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
	<div class="profile-wrapper">
		<div class="profile-data">
			<div class="profile-avatar">
				<img
					:src="user?.photoURL || undefined"
					:alt="user?.displayName || 'User Avatar'"
					v-if="user"
				/>
			</div>
			<div class="profile-info">
				<h1 class="profile-name" v-if="user">{{ user.displayName }}</h1>
				<p class="profile-email" v-if="user"><b>Email:</b> {{ user.email }}</p>
			</div>
		</div>
		<button class="profile-sign-out-button" @click="handleSignOut" v-if="user">
			<slot></slot>
			<img :src="logOutIcon" alt="Google Sign In" />
			<div>Выйти</div>
		</button>
	</div>
</template>
