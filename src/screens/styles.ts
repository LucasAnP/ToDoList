import { styled } from "styled-components/native";
import TodoLogo from "../assets/images/Logo.svg";
import PlusIcon from "../assets/icons/Plus.svg";
import ClipBoardIcon from "../assets/icons/Clipboard.svg";

interface ContainerProps {
  insetsTop: number;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  margin-top: ${({ insetsTop }) => insetsTop}px;

  background-color: ${({ theme }) => theme.colors.base.gray[600]};
`;

export const Header = styled.View`
  width: 100%;
  height: 127px;

  align-items: center;

  background-color: ${({ theme }) => theme.colors.base.gray[700]};

  padding: 0 24px;
`;

export const SvgComponent = styled(TodoLogo)`
  margin-top: 24px;
`;

export const InputContainer = styled.View`
  width: 100%;
  height: 54px;

  flex-direction: row;

  position: absolute;
  bottom: -24px;
`;

export const Input = styled.TextInput`
  flex: 1;

  padding: 16px;

  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors.base.gray[500]};

  margin-right: 4px;

  color: ${({ theme }) => theme.colors.base.gray[100]};

  font-family: "Inter-Regular";
  font-size: 16px;
`;

export const InputButton = styled.TouchableOpacity`
  width: 52px;
  height: 52px;

  border-radius: 6px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.product.blueDark};
`;

export const PlusIconComponent = styled(PlusIcon)``;

export const BodyContainer = styled.View`
  flex: 1;

  margin-top: 55px;

  padding: 0 24px;

  align-items: center;
`;

export const TasksStatusContainer = styled.View`
  width: 100%;
  height: 40px;

  flex-direction: row;

  justify-content: space-between;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.base.gray[300]};
`;

export const CreatedText = styled.Text`
  color: ${({ theme }) => theme.colors.product.blue};

  font-family: "Inter-Bold";
  font-size: 14px;

  margin-right: 8px;
`;

export const ConcludedText = styled.Text`
  color: ${({ theme }) => theme.colors.product.purple};

  font-family: "Inter-Bold";
  font-size: 14px;

  margin-right: 8px;
`;

export const AgroupContainer = styled.View`
  flex-direction: row;
`;

export const ViewIcon = styled.View`
  background-color: ${({ theme }) => theme.colors.base.gray[400]};

  width: 25px;
  height: 19px;

  align-items: center;
  justify-content: center;

  border-radius: 999px;
`;

export const ViewIconText = styled.Text`
  color: ${({ theme }) => theme.colors.base.gray[200]};

  font-family: "Inter-Bold";
  font-size: 12px;
`;

export const EmptyContainer = styled.View`
  align-items: center;
`;

export const ClipboardIcon = styled(ClipBoardIcon)`
  margin-top: 48px;
  margin-bottom: 16px;
`;

export const EmptyTextBold = styled.Text`
  color: ${({ theme }) => theme.colors.base.gray[300]};

  font-family: "Inter-Bold";
  font-size: 14px;
`;
export const EmptyText = styled.Text`
  color: ${({ theme }) => theme.colors.base.gray[300]};

  font-family: "Inter-Regular";
  font-size: 14px;
`;
