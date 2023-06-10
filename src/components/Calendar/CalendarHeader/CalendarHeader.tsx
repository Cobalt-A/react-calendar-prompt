import React, { FC } from "react";
import Container from "../../../ui/Container/Container";
import Row from "../../../ui/Row/Row";
import styled from "styled-components";
import { BsPlusLg } from "react-icons/bs";
import { useAppSelector, useAppDispatch } from "../../../hooks/redux";
import { calendarSlice } from "../../../store/reducers/calendar";

const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const StyledTitle = styled.h1`
  font-weight: 300;
`;

const CalendarHeader: FC = () => {
  const { focusEvent, events } = useAppSelector((state) => state.calendarReducer);
  const { setEvents } = calendarSlice.actions;
  const dispatch = useAppDispatch();
  const clickHandler = (): void => {
    dispatch(setEvents([focusEvent, ...events]));
  };

  return (
    <header>
      <Container>
        <Row>
          <StyledTitle>Interview Calendar</StyledTitle>
          <StyledButton onClick={clickHandler}>
            <BsPlusLg size={35} color="#dc3434" />
          </StyledButton>
        </Row>
      </Container>
    </header>
  );
};

export default CalendarHeader;
