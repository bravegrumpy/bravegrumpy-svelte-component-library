import type { Preview } from '@storybook/sveltekit';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		backgrounds: {
			values: [
				{ name: 'light', value: '#eee8d5' },
				{ name: 'dark', value: '#073642' }
			]
		}
	},

	tags: ['autodocs']
};

export default preview;
