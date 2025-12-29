import styled from "styled-components";

export const Container = styled.div<{
  $aspectRatio?: string;
  $rounded?: string;
}>`
  position: relative;
  width: 100%;
  aspect-ratio: ${(props) => props.$aspectRatio || "auto"};
  overflow: hidden;
  border-radius: ${(props) => {
    switch (props.$rounded) {
      case "sm":
        return "4px";
      case "md":
        return "8px";
      case "lg":
        return "16px";
      case "full":
        return "9999px";
      default:
        return "0";
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledImage = styled.img<{
  $objectFit?: string;
}>`
  width: 100%;
  height: 100%;
  object-fit: ${(props) => props.$objectFit || "cover"};
  display: block;
`;
