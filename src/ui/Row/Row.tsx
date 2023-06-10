import React, { FC, ReactNode } from "react";
import styled from "styled-components";

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

interface RowProps {
  children: ReactNode;
}

const Row: FC<RowProps> = ({ children }) => {
  return <StyledRow>{children}</StyledRow>;
};

export default Row;
