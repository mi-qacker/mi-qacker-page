import {mount} from '@vue/test-utils';
import AboutPage from './AboutPage.vue';
import {mountProps} from '../tests/utils';

describe('AboutPage component', () => {
	it('mount without errors', async () => {
		expect(() => mount(AboutPage, mountProps)).not.toThrowError();
	});
});
