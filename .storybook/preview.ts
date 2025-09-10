import type { Preview, SvelteRenderer } from '@storybook/sveltekit';
import { withThemeByClassName } from "@storybook/addon-themes"

import "../src/app.css"

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
				light: { name: 'Light', value: '#eee8d5'},
				dark: { name: 'Dark', value: '#073642'},
				neutral: { name: 'Neutral', value: '#ddd1aa'}
			},
		},
	},
	initialGlobals: {
		backgrounds: {
			value: 'neutral'
		},
	},
	decorators: [
		withThemeByClassName<SvelteRenderer>({
			themes: {
				light: '',
				dark: 'dark'
			},
			defaultTheme: 'light'
		}),
	],

	tags: ['autodocs']
};

export default preview;
