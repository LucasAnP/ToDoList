import {
  Container,
  Header,
  Input,
  InputButton,
  InputContainer,
  PlusIconComponent,
  SvgComponent,
} from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components/native";
import { useState } from "react";

export const Home = () => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const [input, setInput] = useState("");

  return (
    <Container insetsTop={Math.max(insets.top)}>
      <StatusBar backgroundColor={theme.colors.base.gray[700]} translucent />
      <Header>
        <SvgComponent />

        <InputContainer>
          <Input
            value={input}
            onChangeText={setInput}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={theme.colors.base.gray[300]}
          />
          <InputButton activeOpacity={0.7}>
            <PlusIconComponent />
          </InputButton>
        </InputContainer>
      </Header>
    </Container>
  );
};
