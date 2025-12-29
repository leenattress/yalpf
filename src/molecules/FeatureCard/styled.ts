import styled from "styled-components";

export const Container = styled.div<{ $align?: string }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: ${(props) => props.$align || "left"};
`;

export const ImageWrapper = styled.div<{ $align?: string }>`
  display: flex;
  justify-content: ${(props) => props.$align === "center" ? "center" : props.$align === "right" ? "flex-end" : "flex-start"};
  
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const HeadlineWrapper = styled.div`
  /* Override typography margins for tighter spacing in cards */
  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0.25rem;
    line-height: 1.2;
  }
`;

export const DescriptionWrapper = styled.div`
  /* Override typography margins for tighter spacing in cards */
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    line-height: 1.4;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const CTAWrapper = styled.div`
  /* CTA styling is inherited from passed element */
`;
