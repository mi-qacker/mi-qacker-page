import {createRouter, createWebHistory} from 'vue-router';

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{path: '/', component: () => import('./main/MainPage.vue')},
		{path: '/about', component: () => import('./about/AboutPage.vue')},
		{path: '/contacts', component: () => import('./contacts/ContactsPage.vue')},
	],
});
