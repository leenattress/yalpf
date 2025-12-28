import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  font-family: sans-serif;
`;

export const Inner = styled.div<{ $fullWidth?: boolean }>`
  max-width: ${props => props.$fullWidth ? "100%" : "1200px"};
  margin: 0 auto;
`;
