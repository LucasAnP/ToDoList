import {
  AgroupContainer,
  BodyContainer,
  ClipboardIcon,
  ConcludedIcon,
  ConcludedText,
  Container,
  CreatedIcon,
  CreatedText,
  EmptyContainer,
  EmptyText,
  EmptyTextBold,
  Header,
  Input,
  InputButton,
  InputContainer,
  ListContainer,
  PlusIconComponent,
  SvgComponent,
  TaskContainer,
  TasksStatusContainer,
  TasksText,
  TrashIcon,
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

  const [createdTasks, setCreatedTasks] = useState([
    { value: "Teste created" },
    { value: "Teste created 2" },
    { value: "Teste created 3" },
  ]);
  const [concludedTasks, setConcludedTasks] = useState([
    { value: "Teste created" },
    { value: "Teste created 2" },
    { value: "Teste created 3" },
  ]);

  const handleConcludeTask = (item, index) => {
    setCreatedTasks(
      createdTasks.filter((taskValue) => taskValue.value !== item?.value)
    );
    setConcludedTasks((prevState) => [...prevState, item]);
    setInput("");
  };

  const handleDeleteTask = (item, index) => {
    const createdTasksLenght = createdTasks.length;
    if (createdTasksLenght > index) {
      setCreatedTasks(
        createdTasks.filter((taskValue) => taskValue.value !== item?.value)
      );
    } else {
      setConcludedTasks(
        concludedTasks.filter((taskValue) => taskValue.value !== item?.value)
      );
    }
  };

  const handleAddTask = () => {
    if (input) {
      setCreatedTasks([
        {
          value: input,
        },
        ...createdTasks,
      ]);
    }
  };

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
          <InputButton activeOpacity={0.7} onPress={handleAddTask}>
            <PlusIconComponent />
          </InputButton>
        </InputContainer>
      </Header>
      <BodyContainer>
        <TasksStatusContainer
          border={[...createdTasks, ...concludedTasks].length === 0}
        >
          <AgroupContainer>
            <CreatedText>Created</CreatedText>
            <ViewIcon>
              <ViewIconText>{createdTasks.length}</ViewIconText>
            </ViewIcon>
          </AgroupContainer>
          <AgroupContainer>
            <ConcludedText>Concluded</ConcludedText>
            <ViewIcon>
              <ViewIconText>{concludedTasks.length}</ViewIconText>
            </ViewIcon>
          </AgroupContainer>
        </TasksStatusContainer>
        <ListContainer
          data={[...createdTasks, ...concludedTasks]}
          renderItem={({ item, index }) => (
            <TaskContainer>
              {index >= createdTasks.length ? (
                <ConcludedIcon />
              ) : (
                <CreatedIcon onPress={() => handleConcludeTask(item, index)} />
              )}
              <TasksText
                numberOfLines={2}
                concluded={index >= createdTasks.length}
              >
                {item?.value}
              </TasksText>
              <TrashIcon onPress={() => handleDeleteTask(item, index)} />
            </TaskContainer>
          )}
          ListEmptyComponent={() => (
            <EmptyContainer>
              <ClipboardIcon />
              <EmptyTextBold>
                Você ainda não tem tarefas cadastradas
              </EmptyTextBold>
              <EmptyText>Crie tarefas e organize seus itens a fazer</EmptyText>
            </EmptyContainer>
          )}
        />
      </BodyContainer>
    </Container>
  );
};
