import { addons } from 'storybook/manager-api';
import { themes } from 'storybook/theming';
import BraveGrumpyTheme from './BraveGrumpyTheme';

addons.setConfig({
	theme: BraveGrumpyTheme
});
