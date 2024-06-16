<script setup lang="ts">
import {ref} from 'vue';

type Project = {
	id: string;
	title: string;
	description: string;
	img: string;
};

const projects = ref<Project[]>([
	{
		id: 'nothing',
		title: 'Oops, there are no projects yet',
		description: "I don't have any projects yet, so for now there will be a funny gif here.",
		img: 'alien-cat.gif',
	},
]);
</script>
<template>
	<header class="my-4">
		<h1 class="mb-2 text-3xl font-bold">Hello! My name is Matthew Kalinin</h1>
		<p>I'm a software developer, from Mars (kidding, of course not from Mars, lol)</p>
	</header>

	<section class="mb-4">
		<h2 class="mb-2 text-xl">About me</h2>
		<div class="flex">
			<p class="grow">
				I specialize in web application development (mostly frontend). My experience includes working with technologies
				such as JavaScript, <span class="line-through">Node.js</span> (JavaScript),
				<span class="line-through">TypeScript</span> (Microsoft JavaScript), etc.
			</p>
			<img src="/alienpls3-alienpls.gif" alt="alien gif" class="hidden sm:block" />
		</div>
	</section>

	<section class="mb-4">
		<h2 class="mb-2 text-xl">My projects</h2>
		<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
			<div v-for="project in projects" :key="project.id" class="flex flex-col rounded-md bg-slate-700 p-4">
				<img class="h-32 object-contain" :src="project.img" :alt="project.title" />
				<h3 class="font-bold underline">{{ project.title }}</h3>
				<p class="text-sm">{{ project.description }}</p>
			</div>
		</div>
	</section>
</template>
