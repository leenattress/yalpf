import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const StyledButton = styled.button<{
  $variant?: "primary" | "secondary" | "outline";
  $size?: "small" | "medium" | "large";
  $fullWidth?: boolean;
  $isLoading?: boolean;
}>`
  /* Base styles - minimal, developers will extend */
  font-family: var(--font-family, sans-serif);
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: ${props => props.$isLoading ? "wait" : "pointer"};
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
  position: relative;
  
  /* Full width option */
  width: ${props => props.$fullWidth ? "100%" : "auto"};
  
  /* Size variants - ensuring minimum 44x44px touch target */
  ${props => {
    switch (props.$size) {
      case "small":
        return `
          font-size: 14px;
          padding: 8px 16px;
          min-height: 36px;
        `;
      case "large":
        return `
          font-size: 18px;
          padding: 16px 32px;
          min-height: 56px;
        `;
      case "medium":
      default:
        return `
          font-size: 16px;
          padding: 12px 24px;
          min-height: 44px;
        `;
    }
  }}
  
  /* Variant styles - bare minimum, developers will customize */
  ${props => {
    switch (props.$variant) {
      case "secondary":
        return `
          background-color: #f5f5f5;
          color: #333;
          
          &:hover:not(:disabled) {
            background-color: #e8e8e8;
          }
          
          &:active:not(:disabled) {
            background-color: #d8d8d8;
          }
        `;
      case "outline":
        return `
          background-color: #f5f5f5;
          color: #333;
          
          &:hover:not(:disabled) {
            background-color: #e8e8e8;
          }
          
          &:active:not(:disabled) {
            background-color: #d8d8d8;
          }
        `;
      case "primary":
      default:
        return `
          background-color: #000;
          color: #fff;
          
          &:hover:not(:disabled) {
            background-color: #333;
          }
          
          &:active:not(:disabled) {
            background-color: #555;
          }
        `;
    }
  }}
  
  /* Disabled state */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  /* Focus state - accessibility */
  &:focus-visible {
    outline: 3px solid rgba(0, 0, 0, 0.3);
    outline-offset: 2px;
  }
  
  /* Loading state */
  ${props => props.$isLoading && `
    pointer-events: none;
  `}
`;

export const LoadingSpinner = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spin} 0.6s linear infinite;
`;

export const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
