import React from "react";
import { type PageProps } from "./types";
import { Container } from "./styled";

const Page: React.FC<PageProps> = ({ children, ...props }) => {
  return (
    <Container data-testid="page-container" {...props}>
      {children}
    </Container>
  );
};

export default Page;
