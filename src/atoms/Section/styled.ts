import styled from "styled-components";
import { typographyStyles } from "../../styles/typography";

export const Container = styled.section`
  width: 100%;
  
  /* Apply typography styles to all HTML tags inside Section */
  ${typographyStyles}
`;

export const Inner = styled.div<{ $fullWidth?: boolean; $gap?: string; $mobileBreakpoint?: string }>`
  max-width: ${props => props.$fullWidth ? "100%" : "1200px"};
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  
  &:has(> [data-column]) {
    flex-direction: row;
    gap: ${props => props.$gap || "20px"};
    
    @media (max-width: ${props => props.$mobileBreakpoint || "768px"}) {
      flex-direction: column;
    }
  }
`;



export const Column = styled.div<{ $width?: number }>`
  flex: ${props => props.$width || 1};
  min-width: 0;
`;
