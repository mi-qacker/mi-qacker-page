import {mount} from '@vue/test-utils';
import MainPage from './MainPage.vue';
import {mountProps} from '../tests/utils';

describe('MainPage component', () => {
	it('mount without errors', async () => {
		expect(() => mount(MainPage, mountProps)).not.toThrowError();
	});
});
