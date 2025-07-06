<script setup lang="ts">
import TextField from '../components/TextField.vue'
</script>

<template>
	<div class="wrapper">
		<TextField />
		<TextField />
	</div>
</template>

<style scoped>
.wrapper {
	height: 100vh;
	background-color: #cecece;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	gap: 24px;
	padding: 40px 24px;
}
</style>
