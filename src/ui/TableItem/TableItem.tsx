import React, { FC } from "react";
import styled from "styled-components";

const StyledItem = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
`;

const TableItem: FC = () => {
  return <StyledItem color="#ebebfe"></StyledItem>;
};

export default TableItem;
