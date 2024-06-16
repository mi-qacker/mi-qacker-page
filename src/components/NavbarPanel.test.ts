import {mount} from '@vue/test-utils';
import NavbarPanel from './NavbarPanel.vue';
import {mountProps} from '../tests/utils';

describe('NavbarPanel component', () => {
	it('mount without errors', async () => {
		expect(() => mount(NavbarPanel, mountProps)).not.toThrowError();
	});
	it('has nav tag', async () => {
		const wrapper = mount(NavbarPanel, mountProps);
		expect(() => wrapper.get('nav')).not.toThrowError();
	});
	it('has site title', async () => {
		const wrapper = mount(NavbarPanel, mountProps);
		const title = wrapper.get('nav span');
		expect(title.text()).toBe('mi_qacker');
		expect(title.isVisible()).toBe(true);
	});
	it('has site logo', async () => {
		const wrapper = mount(NavbarPanel, mountProps);
		const img = wrapper.get('nav img');
		expect(img.isVisible()).toBe(true);
	});
});
