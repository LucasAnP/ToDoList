import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { Home } from "./src/screens";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { ThemeProvider } from "styled-components/native";
import Theme from "./src/theme/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Bold": require("./src/assets/fonts/Inter-Bold.ttf"),
    "Inter-Regular": require("./src/assets/fonts/Inter-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <ThemeProvider theme={Theme}>
        <Home />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
