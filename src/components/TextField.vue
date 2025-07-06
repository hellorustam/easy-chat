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
		<router-link to="/">
			<button class="text-field-send-button">
				<img :src="sendArrow" alt="" />
			</button>
		</router-link>
	</div>
</template>
