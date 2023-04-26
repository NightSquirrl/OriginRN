import {MD3LightTheme} from 'react-native-paper';

const theme = {
  ...MD3LightTheme, // or MD3DarkTheme
  roundness: 2,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#FF9494',
    secondary: '#FFD1D1',
  },
  fonts: {
    ...MD3LightTheme.fonts,
    titleLarge: {
      ...MD3LightTheme.fonts.titleLarge,
      fontFamily: 'Roboto',
      fontWeight: 'normal',
      fontSize: 16,
      lineHeight: 16,
    },
  },
};

export default theme;
