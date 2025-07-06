<script setup lang="ts">
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import googleIcon from '../assets/googleIcon.svg'
import router from '../router/router'
import { useUserStore } from '../store/user.ts'

const { user } = useUserStore()

console.log(user)

const signInWithGoogle = async () => {
	try {
		const provider = new GoogleAuthProvider()
		await signInWithPopup(getAuth(), provider)
		router.push('/chat')
		console.log('User signed in with Google successfully')
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
		<button @click="signInWithGoogle" to="/chat" class="login-google-btn">
			<slot></slot>
			<img :src="googleIcon" alt="Google Sign In" />
			<div>Google</div>
		</button>
	</div>
</template>
