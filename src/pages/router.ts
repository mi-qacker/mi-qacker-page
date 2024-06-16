import {createRouter, createWebHistory} from 'vue-router';
import MainPage from './MainPage.vue';
import ContactsPage from './ContactsPage.vue';
import AboutPage from './AboutPage.vue';

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{path: '/', component: MainPage},
		{path: '/about', component: AboutPage},
		{path: '/contacts', component: ContactsPage},
	],
});
