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
		<button class="login-google-btn">
			<slot></slot>
			<img :src="googleIcon" alt="Google Sign In" />
			<div>Google</div>
		</button>
	</div>
</template>

<style>
.wrapper-login {
	max-width: 320px;
	background-color: white;
	display: flex;
	flex-direction: column;
	gap: 24px;
	padding: 24px;
	border-radius: 16px;
	box-shadow: 0px 4px 0px rgba(231, 231, 231, 1),
		0px 12px 14px rgba(0, 0, 0, 0.12);
}

.login-title {
	font-family: 'Roboto', sans-serif;
	font-size: 20px;
	font-weight: 700;
	width: 100%;
	text-align: center;
}

.login-description {
	font-family: 'Roboto', sans-serif;
	font-size: 16px;
	line-height: 20px;
	font-weight: 100;
	font-style: italic;
	width: 100%;
	text-align: center;
}

.login-divider {
	width: 100%;
	height: 2px;
	background-color: #f1f1f1;
}

.login-btn-title {
	font-family: 'Roboto', sans-serif;
	font-size: 16px;
	font-weight: 400;
	line-height: 20px;
	text-align: center;
}

.login-google-btn {
	width: 100%;
	padding: 10px 16px;
	border-radius: 16px;
	border: none;
	background-color: #e8eff3;
	font-family: 'Roboto', sans-serif;
	font-size: 16px;
	text-align: center;
	cursor: pointer;
	display: flex;
	/* justify-content: center; */
	align-items: center;
	gap: 10px;
}
.login-google-btn:hover {
	background-color: #d9e1e7;
}
.login-google-btn div {
	width: 100%;
}
</style>
