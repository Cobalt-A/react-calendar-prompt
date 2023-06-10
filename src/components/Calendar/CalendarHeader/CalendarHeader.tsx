import React, { FC } from "react";
import Container from "../../../ui/Container/Container";
import Row from "../../../ui/Row/Row";
import styled from "styled-components";
import { BsPlusLg } from "react-icons/bs";

const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const StyledTitle = styled.h1`
  font-weight: 300;
`;

const CalendarHeader: FC = () => {
  return (
    <header>
      <Container>
        <Row>
          <StyledTitle>Interview Calendar</StyledTitle>
          <StyledButton>
            <BsPlusLg size={35} color="#dc3434" />
          </StyledButton>
        </Row>
      </Container>
    </header>
  );
};

export default CalendarHeader;
