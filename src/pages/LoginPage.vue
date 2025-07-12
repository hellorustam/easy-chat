<script setup lang="ts">
import {
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
} from 'firebase/auth'
import { onMounted, ref } from 'vue'
import googleIcon from '../assets/googleIcon.svg'
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

const signInWithGoogle = async () => {
	try {
		const provider = new GoogleAuthProvider()
		await signInWithPopup(getAuth(), provider)
		await router.isReady()
		router.push('/chat')
	} catch (error) {
		console.error('Error signing in with Google:', error)
	}
}
</script>

<template>
	<div class="login-wrapper">
		<div class="login-title">Easy Chat</div>
		<div class="login-description">
			Добро пожаловать в простой чат, где вы можете просто пообщаться
			и разделить общее цифровое пространство
		</div>
		<div class="login-divider"></div>
		<span class="login-btn-title">Войти с помощью</span>
		<div @click="signInWithGoogle" class="login-google-btn">
			<slot></slot>
			<img :src="googleIcon" alt="Google Sign In" />
			<div>Google</div>
		</div>
	</div>
</template>
