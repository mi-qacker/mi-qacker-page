import {mount} from '@vue/test-utils';
import App from './App.vue';
import {mountProps} from './tests/utils';

describe('App component', () => {
	it('mount without errors', async () => {
		expect(() => mount(App, mountProps)).not.toThrowError();
	});
});
