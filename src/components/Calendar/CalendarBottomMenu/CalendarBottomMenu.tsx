import React, { FC } from "react";
import Container from "../../../ui/Container/Container";
import Row from "../../../ui/Row/Row";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../../../hooks/redux";
import { calendarSlice } from "../../../store/reducers/calendar";

const StyledButton = styled.button`
  color: #dc3434;
  font-size: 24px;
`;

const StyledContent = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #f6f6f6;
  border-top: 1px solid #e5e5e5;
  padding: 15px 0;
  height: 60px;
`;

const CalendarBottomMenu: FC = () => {
  const { isShowDelete, events, focusEvent } = useAppSelector(
    (state) => state.calendarReducer
  );
  const { setEvents, setShowDelete, setDate } = calendarSlice.actions;
  const dispatch = useAppDispatch();

  const deleteClickHandler = (): void => {
    const filteredEvents = events.filter((eventId) => eventId !== focusEvent);
    dispatch(setEvents(filteredEvents));
    dispatch(setShowDelete(false));
  };

  const todayClickHandler = (): void => {
    dispatch(setDate(new Date().getTime()));
  };

  return (
    <StyledContent>
      <Container>
        <Row>
          <StyledButton onClick={todayClickHandler}>Today</StyledButton>
          {isShowDelete && (
            <StyledButton onClick={deleteClickHandler}>Delete</StyledButton>
          )}
        </Row>
      </Container>
    </StyledContent>
  );
};

export default CalendarBottomMenu;
