import styled from "styled-components";

export const Container = styled.div<{ $size?: string }>`
  width: 100%;
  height: ${(props) => {
    switch (props.$size) {
      case "xs":
        return "8px";
      case "sm":
        return "16px";
      case "md":
        return "24px";
      case "lg":
        return "32px";
      case "xl":
        return "48px";
      case "2xl":
        return "64px";
      case "3xl":
        return "96px";
      default:
        return "24px";
    }
  }};
`;
