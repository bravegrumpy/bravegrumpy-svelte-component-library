import type { Preview } from '@storybook/svelte';

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
	}
};

export default preview;
