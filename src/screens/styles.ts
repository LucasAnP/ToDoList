import { styled } from "styled-components/native";
import TodoLogo from "../assets/images/Logo.svg";

interface ContainerProps {
  insetsTop: number;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  align-items: center;
  margin-top: ${({ insetsTop }) => insetsTop}px;

  background-color: ${({ theme }) => theme.colors.base.gray[600]};
`;

export const Header = styled.View`
  width: 100%;
  height: 127px;

  align-items: center;

  background-color: ${({ theme }) => theme.colors.base.gray[700]};
`;

export const SvgComponent = styled(TodoLogo)`
  margin-top: 24px;
`;
