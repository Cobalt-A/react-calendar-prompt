import React, { FC } from "react";
import Container from "../../../ui/Container/Container";
import Row from "../../../ui/Row/Row";
import styled from "styled-components";
import { BsPlusLg } from "react-icons/bs";
import { useAppSelector, useAppDispatch } from "../../../hooks/redux";
import { calendarSlice } from "../../../store/reducers/calendar";
import { getHourId } from "../../../utils/dates/dates";

const StyledHeader = styled.header`
  padding: 25px 0;
  overflow: hidden;
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const StyledTitle = styled.h1`
  font-weight: 300;
`;

const CalendarHeader: FC = () => {
  const { events } = useAppSelector((state) => state.calendarReducer);
  const { setEvents } = calendarSlice.actions;
  const dispatch = useAppDispatch();

  const clickHandler = (): void => {
    const data = prompt(
      "Enter event time: YYYY-MM-DD HH:mm:ss",
      "2023-06-05 05:00:00"
    );
    const date = data ? new Date(data) : new Date();
    if (events.find((eventId) => eventId === getHourId(date, date.getHours())))
      return;
    dispatch(setEvents([getHourId(date, date.getHours()), ...events]));
  };

  return (
    <StyledHeader>
      <Container>
        <Row>
          <StyledTitle>Interview Calendar</StyledTitle>
          <StyledButton onClick={clickHandler}>
            <BsPlusLg size={35} color="#dc3434" />
          </StyledButton>
        </Row>
      </Container>
    </StyledHeader>
  );
};

export default CalendarHeader;
