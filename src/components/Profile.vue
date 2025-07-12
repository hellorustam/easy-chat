<script setup lang="ts">
import { getAuth, signOut } from 'firebase/auth'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
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
		userStore.clearUser()
		router.push('/')
	} catch (error) {
		console.error('Error signing out:', error)
	}
}

const isVisible = ref(false)

function showProfile() {
	isVisible.value = !isVisible.value
}
</script>

<template>
	<div class="profile-wrapper" v-show="isVisible">
		<div class="profile-data">
			<div class="profile-info">
				<h1 class="profile-name" v-if="user">{{ user.displayName }}</h1>
				<p class="profile-email" v-if="user">{{ user.email }}</p>
			</div>
			<img
				class="profile-avatar"
				:src="user?.photoURL || undefined"
				:alt="user?.displayName || 'User Avatar'"
				v-if="user"
			/>
		</div>
		<button class="profile-sign-out-button" @click="handleSignOut" v-if="user">
			<slot></slot>
			<img :src="logOutIcon" alt="Google Sign In" />
			<div>Выйти</div>
		</button>
	</div>
	<img
		@click="showProfile"
		class="profile-avatar profile-avatar-btn"
		:src="user?.photoURL || undefined"
		:alt="user?.displayName || 'User Avatar'"
		v-if="user"
	/>
</template>
