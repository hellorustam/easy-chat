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
		<router-link to="/">
			<button class="send-button"><img :src="sendArrow" alt="" /></button>
		</router-link>
	</div>
</template>
