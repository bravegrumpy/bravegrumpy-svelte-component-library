import type { StorybookConfig } from '@storybook/sveltekit';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|ts|svelte)'],

	addons: [
		'@storybook/addon-svelte-csf',
		'@chromatic-com/storybook',
		'@storybook/addon-vitest',
		'@storybook/addon-docs',
		'@storybook/addon-themes'
	],

	framework: {
		name: '@storybook/sveltekit',
		options: {}
	},

	core: {
		disableTelemetry: true,
		enableCrashReports: false
	},
	docs: {
		defaultName: 'Documentation'
	}
};
export default config;
