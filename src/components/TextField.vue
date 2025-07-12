<script setup lang="ts">
import sendArrow from '../assets/sendArrow.svg'
</script>

<template>
	<div class="text-field-wrapper">
		<input
			type="text"
			placeholder="Введите сообщение…"
			class="text-field-input"
			maxlength="80"
		/>
		<button class="text-field-send-button">
			<img :src="sendArrow" alt="" />
		</button>
	</div>
</template>
