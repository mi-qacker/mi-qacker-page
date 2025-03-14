<script setup lang="ts">
import {ref, computed} from 'vue';

type Contact = {
	id: string;
	name: string;
	link: string;
	category: 'social' | 'messenger';
	icon: string;
};

const contacts = ref<Contact[]>([
	{
		id: 'github',
		name: 'GitHub',
		category: 'social',
		link: 'https://github.com/mi-qacker',
		icon: '/icons/github.svg',
	},
	{
		id: 'linkedin',
		name: 'LinkedIn',
		category: 'social',
		link: 'https://www.linkedin.com/in/matthewkalinin',
		icon: '/icons/linkedin.svg',
	},
]);
const social = computed(() => contacts.value.filter(({category}) => category === 'social'));
const messenger = computed(() => contacts.value.filter(({category}) => category === 'messenger'));
</script>

<template>
	<header class="my-4">
		<h1 class="text-2xl font-bold">Contact me</h1>
		<p>If you want to discuss it, I will be glad to reply to your messages</p>
	</header>

	<section class="mb-4">
		<h2 class="mb-2 text-xl font-bold">Contacts</h2>

		<h3 class="text-lg">Email:</h3>
		<p><a class="underline" href="mailto:matvey.kalinin2001@gmail.com">matvey.kalinin2001@gmail.com</a></p>

		<template v-if="social.length > 0">
			<h3 class="my-2 text-lg">Social network:</h3>
			<ul class="flex list-inside gap-2">
				<li class="ml-2 flex items-center gap-2" v-for="contact in social" :key="contact.id">
					<img :src="contact.icon" :alt="`${contact.id} logo`" height="24" width="24" />
					<a class="underline" :href="contact.link" target="_blank">{{ contact.name }}</a>
				</li>
			</ul>
		</template>

		<template v-if="messenger.length > 0">
			<h3 class="my-2 text-lg">Messengers:</h3>
			<ul class="flex list-inside gap-2">
				<li class="ml-2 flex items-center gap-2" v-for="contact in messenger" :key="contact.id">
					<img :src="contact.icon" :alt="`${contact.id} logo`" height="24" width="24" />
					<a class="underline" :href="contact.link" target="_blank">{{ contact.name }}</a>
				</li>
			</ul>
		</template>
	</section>
</template>
