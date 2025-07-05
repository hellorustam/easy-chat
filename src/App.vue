<script setup lang="ts">
import TextField from './components/TextField.vue'
import Login from './pages/Login.vue'
</script>

<template>
	<div class="wrapper-main">
		<Login />
		<TextField />
	</div>
</template>

<style>
.wrapper-main {
	width: 100%;
	height: 100vh;
	background-color: #f1f1f1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 24px;
}
</style>
