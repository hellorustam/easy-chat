<script setup lang="ts"></script>

<template>
	<div class="wrapper-main">
		<div class="wrapper-login">
			<div class="login-title">Easy Chat</div>
			<div class="login-description">
				Добро пожаловать в простой чат, где вы можете просто пообщаться
				и разделить общее цифровое пространство
			</div>
			<div class="login-divider"></div>
			<span class="login-btn-title">Войти с помощью</span>
			<div class="login-google-btn">Google</div>
		</div>
	</div>
</template>

<style>
.wrapper-main {
	width: 100%;
	height: 100vh;
	background-color: #f1f1f1;
	display: flex;
	justify-content: center;
	align-items: center;
}

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
	height: 48px;
	background-color: #4285f4;
}
</style>
