import { styled } from "styled-components/native";
import TodoLogo from "../assets/images/Logo.svg";
import PlusIcon from "../assets/icons/Plus.svg";

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
