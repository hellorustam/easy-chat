<script setup lang="ts">
import sendArrow from '../assets/sendArrow.svg'
</script>

<template>
	<div class="wrapper-message">
		<input
			type="text"
			placeholder="Введите сообщение…"
			class="input"
			maxlength="80"
		/>
		<button class="send-button"><img :src="sendArrow" alt="" /></button>
	</div>
</template>

<style scoped>
.wrapper-message {
	display: flex;
	width: 100%;
	max-width: 594px;
	margin: 0 auto;
	padding: 12px 12px 12px 28px;
	background-color: white;
	border-radius: 36px;
	box-shadow: 0px 4px 0px rgba(231, 231, 231, 1),
		0px 12px 14px rgba(0, 0, 0, 0.12);
}

.input {
	flex: 1;
	padding: 8px 8px 8px 0px;
	border: none;
	font-family: 'Roboto', sans-serif;
	font-size: 16px;
	line-height: 20px;
}

.input:focus {
	outline: none;
}

.input::placeholder {
	font-family: 'Roboto', sans-serif;
	font-style: italic;
	font-size: 16px;
	font-weight: 100;
	color: #9b9b9b;
}

.send-button {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 24px;
	padding: 12px;
	background-color: #5181f1;
	border: none;
	border-radius: 32px;
	cursor: pointer;
}

.send-button:hover {
	background-color: #3b71ee;
}
</style>
