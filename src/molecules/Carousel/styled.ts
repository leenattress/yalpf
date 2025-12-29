import styled from "styled-components";

export const Container = styled.div<{ $controlsPosition: string }>`
  font-family: sans-serif;
  position: relative;
  width: 100%;
  display: ${(props) => (props.$controlsPosition === "inline" ? "flex" : "block")};
  align-items: ${(props) => (props.$controlsPosition === "inline" ? "center" : "normal")};
  gap: ${(props) => (props.$controlsPosition === "inline" ? "16px" : "0")};
`;

export const Track = styled.div<{ $controlsPosition: string }>`
  overflow: hidden;
  width: ${(props) => (props.$controlsPosition === "inline" ? "auto" : "100%")};
  flex: ${(props) => (props.$controlsPosition === "inline" ? "1" : "none")};
`;

export const ItemsWrapper = styled.div<{ $translateX: number; $gap: number }>`
  display: flex;
  gap: ${(props) => props.$gap}px;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${(props) => props.$translateX}px);
`;

export const Item = styled.div<{ $itemWidth: string }>`
  flex: 0 0 ${(props) => props.$itemWidth};
  width: ${(props) => props.$itemWidth};
`;

export const Controls = styled.div<{ $controlsPosition: string }>`
  display: flex;
  justify-content: ${(props) => (props.$controlsPosition === "inline" ? "space-between" : "center")};
  align-items: center;
  gap: 16px;
  margin-top: ${(props) => (props.$controlsPosition === "inline" ? "0" : "24px")};
  width: ${(props) => (props.$controlsPosition === "inline" ? "auto" : "100%")};
`;

export const ArrowButton = styled.button<{ $disabled?: boolean }>`
  background: #f0f0f0;
  border: none;
  font-size: 24px;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.$disabled ? 0.3 : 1)};
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  color: inherit;
  flex-shrink: 0;

  &:hover {
    opacity: ${(props) => (props.$disabled ? 0.3 : 0.8)};
    background: ${(props) => (props.$disabled ? "#f0f0f0" : "#e0e0e0")};
  }

  &:focus {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }

  &:active {
    transform: ${(props) => (props.$disabled ? "none" : "scale(0.95)")};
  }
`;
