import {mount} from '@vue/test-utils';
import ContactsPage from './ContactsPage.vue';
import {mountProps} from '../tests/utils';

describe('ContactsPage component', () => {
	it('mount without errors', async () => {
		expect(() => mount(ContactsPage, mountProps)).not.toThrowError();
	});
});
