import React, { FC, ReactNode } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 740px;
  width: 100%;
  margin: 0 auto;
`;

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
