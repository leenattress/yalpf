import styled from "styled-components";
import { typographyStyles } from "../../styles/typography";

/**
 * Main container for Hero section
 * Full-width section element
 */
export const Container = styled.section`
  width: 100%;
  ${typographyStyles}
`;

/**
 * Inner content wrapper with max-width and padding
 */
export const Inner = styled.div<{ $align?: string }>`
  max-width: 1200px;
  margin: 0 auto;    
  text-align: ${props => props.$align === "center" ? "center" : "left"};
`;

/**
 * Flex container for content and media columns
 */
export const Content = styled.div<{ $layout?: string }>`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: ${props => {
      if (props.$layout === "centered") return "column";
      if (props.$layout === "reversed") return "row-reverse";
      return "row";
    }};
    gap: 60px;
  }
`;

/**
 * Text content column
 */
export const TextContent = styled.div<{ $layout?: string }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  ${props => props.$layout === "centered" && `
    align-items: center;
    max-width: 800px;
  `}
`;

/**
 * Media content column
 */
export const MediaContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  
  img, video {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

/**
 * Headline wrapper
 */
export const Headline = styled.div`
  h1 {
    margin: 0;
    font-size: 2rem;
    line-height: 1.2;
    font-weight: bold;
    
    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }
`;

/**
 * Subheadline wrapper
 */
export const Subheadline = styled.div`
  font-size: 1.125rem;
  line-height: 1.6;
  
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
  
  p {
    margin: 0;
  }
`;

/**
 * CTA buttons container
 */
export const CTAGroup = styled.div<{ $align?: string }>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 10px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
    ${props => props.$align === "center" ? "justify-content: center;" : ""}
  }
  
  button, a {
    min-height: 44px;
    padding: 12px 24px;
    font-size: 1rem;
    cursor: pointer;
  }
`;
