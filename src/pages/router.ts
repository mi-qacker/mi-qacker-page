import {createRouter, createWebHistory} from 'vue-router';

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{path: '/', component: () => import('./MainPage.vue')},
		{path: '/about', component: () => import('./AboutPage.vue')},
		{path: '/contacts', component: () => import('./ContactsPage.vue')},
	],
});
