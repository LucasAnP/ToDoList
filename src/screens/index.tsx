import {
  AgroupContainer,
  BodyContainer,
  ClipboardIcon,
  ConcludedText,
  Container,
  CreatedText,
  EmptyContainer,
  EmptyText,
  EmptyTextBold,
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
        <EmptyContainer>
          <ClipboardIcon />
          <EmptyTextBold>Você ainda não tem tarefas cadastradas</EmptyTextBold>
          <EmptyText>Crie tarefas e organize seus itens a fazer</EmptyText>
        </EmptyContainer>
      </BodyContainer>
    </Container>
  );
};
