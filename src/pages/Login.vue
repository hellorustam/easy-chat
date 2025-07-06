<script setup lang="ts">
import googleIcon from '../assets/googleIcon.svg'
</script>

<template>
	<div class="wrapper-login">
		<div class="login-title">Easy Chat</div>
		<div class="login-description">
			Добро пожаловать в простой чат, где вы можете просто пообщаться
			и разделить общее цифровое пространство
		</div>
		<div class="login-divider"></div>
		<span class="login-btn-title">Войти с помощью</span>
		<router-link to="/chat" class="login-google-btn">
			<slot></slot>
			<img :src="googleIcon" alt="Google Sign In" />
			<div>Google</div>
		</router-link>
	</div>
</template>
