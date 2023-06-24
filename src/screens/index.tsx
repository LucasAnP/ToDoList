import { Container, Header, SvgComponent } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components/native";
import { TextInput } from "react-native";

export const Home = () => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  return (
    <Container insetsTop={Math.max(insets.top)}>
      <StatusBar backgroundColor={theme.colors.base.gray[700]} translucent />
      <Header>
        <SvgComponent />
      </Header>
      <TextInput />
    </Container>
  );
};
