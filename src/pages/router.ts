import {createRouter, createWebHistory} from 'vue-router';
import MainPage from './MainPage.vue';
import FeaturesPage from './FeaturesPage.vue';
import AboutPage from './AboutPage.vue';

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{path: '/', component: MainPage},
		{path: '/features', component: FeaturesPage},
		{path: '/about', component: AboutPage},
	],
});
