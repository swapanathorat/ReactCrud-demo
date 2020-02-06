import theme from 'styled-theming';

export const backgroundColor = theme('mode', {
    light: '#fafafa',
    dark: '#222'
});
// define text color for `mode` theme
export const textColor = theme('mode', {
    light: '#000',
    dark: '#fff'
});