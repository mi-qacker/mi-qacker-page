<script setup lang="ts">
import {RouterLink} from 'vue-router';
</script>

<template>
	<nav class="container mx-auto flex text-lg">
		<div class="mr-4 flex items-center gap-1 py-2 font-bold">
			<span>mi_qacker</span>
			<img src="/favicon-32x32.png" alt="alien icon" height="28" width="28" />
		</div>
		<RouterLink class="p-2 underline hover:bg-slate-600" to="/">home</RouterLink>
		<RouterLink class="p-2 underline hover:bg-slate-600" to="/about">about me</RouterLink>
		<RouterLink class="p-2 underline hover:bg-slate-600" to="/contacts">contacts</RouterLink>
	</nav>
</template>
