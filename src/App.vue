<script setup lang="ts">
import {RouterLink} from 'vue-router';
</script>

<template>
	<nav>
		<RouterLink to="/">home</RouterLink>
		<RouterLink to="/features">features</RouterLink>
		<RouterLink to="/about">about</RouterLink>
	</nav>
	<main>
		<RouterView></RouterView>
	</main>
</template>
