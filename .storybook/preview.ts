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
			options: {
				light: { name: 'Light', value: '#eee8d5' },
				dark: { name: 'Dark', value: '#073642' }
			}
		}
	},
	initialGlobals: {
		backgrounds: {
			value: 'light'
		}
	},

	tags: ['autodocs']
};

export default preview;
