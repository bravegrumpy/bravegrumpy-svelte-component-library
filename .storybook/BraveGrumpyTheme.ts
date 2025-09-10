import { create } from "storybook/theming";

export default create({
    base: 'dark',

    fontBase: '"Ruluko", "Recursive", "Verdana", sans-serif',

    brandTitle: 'BraveGrumpy Storybook Theme',
    brandUrl: 'https://www.bravegrumpy.com',
    brandImage: 'https://cdn.bravegrumpy.com/static/assets/images/BraveGrumpyRectangle_color_typed.png',
    brandTarget: '_target',

    colorPrimary: '#6e34a2', //primary
    colorSecondary: '#55ab5e', //secondary


    // UI
    appBg: '#002b36', //solarized-base-03
    appContentBg: '#', // solarized-base-03
    appPreviewBg: '#002b36', //solarized-base-03
    appBorderColor: "#6e34a2", // primary-800
    appBorderRadius: 5,

    textColor: '#839496'
});