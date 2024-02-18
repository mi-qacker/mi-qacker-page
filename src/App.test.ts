import {mount} from '@vue/test-utils';
import App from './App.vue';

describe('App component', () => {
	it(`title display "Hello world!"`, async () => {
		const wrapper = mount(App);
		const h1 = await wrapper.get('h1');
		expect(h1.text()).toContain('Hello world!');
	});
});
