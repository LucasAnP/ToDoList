import {
  AgroupContainer,
  BodyContainer,
  ConcludedText,
  Container,
  CreatedText,
  Header,
  Input,
  InputButton,
  InputContainer,
  PlusIconComponent,
  SvgComponent,
  TasksStatusContainer,
  ViewIcon,
  ViewIconText,
} from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components/native";
import { useState } from "react";

export const Home = () => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const [input, setInput] = useState("");
  const [createdTasks, setCreatedTasks] = useState(0);
  const [concludedTasks, setConcludedTasks] = useState(0);

  return (
    <Container insetsTop={Math.max(insets.top)}>
      <StatusBar backgroundColor={theme.colors.base.gray[700]} translucent />
      <Header>
        <SvgComponent />

        <InputContainer>
          <Input
            value={input}
            onChangeText={setInput}
            placeholder="Add a new task"
            placeholderTextColor={theme.colors.base.gray[300]}
          />
          <InputButton activeOpacity={0.7}>
            <PlusIconComponent />
          </InputButton>
        </InputContainer>
      </Header>
      <BodyContainer>
        <TasksStatusContainer>
          <AgroupContainer>
            <CreatedText>Created</CreatedText>
            <ViewIcon>
              <ViewIconText>{createdTasks}</ViewIconText>
            </ViewIcon>
          </AgroupContainer>
          <AgroupContainer>
            <ConcludedText>Concluded</ConcludedText>
            <ViewIcon>
              <ViewIconText>{concludedTasks}</ViewIconText>
            </ViewIcon>
          </AgroupContainer>
        </TasksStatusContainer>
      </BodyContainer>
    </Container>
  );
};
