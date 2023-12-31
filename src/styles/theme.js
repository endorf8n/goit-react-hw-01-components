export const theme = Object.freeze({
  colors: {
    lightGray: '#e0e0e0',
    green: '#228B22',
    red: '#D22B2B',
    violet: '#34004a',
    light: '#def3f6',
    gray: '#333333',
    blue: '#76b6c4',
    dark: '#064273',
    white: '#ffffff',
  },
  fontSizes: {
    small: '14px',
    medium: '18px',
    large: '22px',
  },
  spacing: value => `${4 * value}px`,
  shadows: {
    small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
  },
});
