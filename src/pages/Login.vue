<script setup lang="ts"></script>

<template>
	<div class="wrapper-main">
		<div class="wrapper-login">
			<span class="login-title">Easy Chat</span>
			Добро пожаловать в простой чат, где вы можете просто пообщаться
			и разделить общее цифровое пространство
			<div class="devider"></div>
			<span class="login-btn-title">Войти с помощью</span>
			<div class="google-btn">Google</div>
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
	padding: 24px;
	border-radius: 16px;
	box-shadow: 0px 4px 0px rgba(231, 231, 231, 1),
		0px 12px 14px rgba(0, 0, 0, 0.12);
}
</style>
