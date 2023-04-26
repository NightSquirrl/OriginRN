import { MD3LightTheme as DefaultTheme } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#FF9494",
    secondary: "#FFD1D1",
  },
  fonts: {
    ...DefaultTheme.fonts,
    titleLarge: {
      ...DefaultTheme.fonts.titleLarge,
      fontFamily: "Roboto",
      fontWeight: "normal",
      fontSize: 16,
      lineHeight: 16,
    },
  },
};

export default theme;
