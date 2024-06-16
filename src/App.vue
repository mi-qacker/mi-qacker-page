<script setup lang="ts">
import NavbarPanel from './components/NavbarPanel.vue';
</script>

<template>
	<NavbarPanel />
	<main class="container mx-auto">
		<RouterView />
	</main>
</template>
