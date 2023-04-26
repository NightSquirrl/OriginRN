import React from 'react';
import theme from './android_app/theme';
import { Provider as PaperProvider } from "react-native-paper";
import AppNavigation from "./android_app/router"

function App() {
  return (
    <PaperProvider theme={theme}>
      <AppNavigation />
    </PaperProvider>
  );
}

export default App;