<script setup lang="ts">
import {ref, computed} from 'vue';

type Contact = {
	id: string;
	name: string;
	link: string;
	category: 'social' | 'messenger';
};

const contacts = ref<Contact[]>([
	{id: 'github', name: 'GitHub', category: 'social', link: 'https://github.com/mi-qacker'},
	{id: 'linkedin', name: 'LinkedIn', category: 'social', link: 'https://www.linkedin.com/in/matthewkalinin'},
	{id: 'telegram', name: 'Telegram channel', category: 'social', link: 'https://t.me/+VIbMx3rTvFozYWIy'},
	{id: 'telegram', name: 'Telegram', category: 'messenger', link: 'https://t.me/matthewkalinin'},
]);
const social = computed(() => contacts.value.filter(({category}) => category === 'social'));
const messenger = computed(() => contacts.value.filter(({category}) => category === 'messenger'));
</script>

<template>
	<header>
		<h1 class="text-2xl font-bold">Contact me</h1>
		<p>If you want to discuss it, I will be glad to reply to your messages</p>
	</header>

	<section>
		<h2 class="text-xl font-bold">Contacts</h2>

		<h3 class="text-lg">Email:</h3>
		<p><a class="underline" href="mailto:matvey.kalinin2001@gmail.com">matvey.kalinin2001@gmail.com</a></p>

		<h3 class="text-lg">Social network:</h3>
		<ul class="flex list-inside gap-2">
			<li class="ml-2 flex items-center gap-2" v-for="contact in social" :key="contact.id">
				<img
					:src="`https://cdn.simpleicons.org/${contact.id}/white`"
					:alt="`${contact.id} logo`"
					height="24"
					width="24" />
				<a class="underline" :href="contact.link" target="_blank">{{ contact.name }}</a>
			</li>
		</ul>

		<h3 class="text-lg">Messengers:</h3>
		<ul class="flex list-inside gap-2">
			<li class="ml-2 flex items-center gap-2" v-for="contact in messenger" :key="contact.id">
				<img
					:src="`https://cdn.simpleicons.org/${contact.id}/white`"
					:alt="`${contact.id} logo`"
					height="24"
					width="24" />
				<a class="underline" :href="contact.link" target="_blank">{{ contact.name }}</a>
			</li>
		</ul>
	</section>
</template>
