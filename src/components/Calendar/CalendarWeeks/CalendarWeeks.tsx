import React, { FC } from "react";
import Container from "../../../ui/Container/Container";
import Row from "../../../ui/Row/Row";
import styled from "styled-components";
import { weekNames, monthsNames } from "../../../utils/dates/dates";
import { useAppSelector, useAppDispatch } from "../../../hooks/redux";
import { calendarSlice } from "../../../store/reducers/calendar";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const StyledContent = styled.div`
  margin-left: 45px;
`;

const StyledDay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 25px;
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledBackgroud = styled.div`
  background-color: #f6f6f6;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
`;

const CalendarWeeks: FC = () => {
  const { week, date } = useAppSelector((state) => state.calendarReducer);
  const { setDate } = calendarSlice.actions;
  const dispatch = useAppDispatch();

  const nextClickHandler = (): void => {
    dispatch(setDate(date + 1000 * 60 * 60 * 24 * 7));
  };

  const prevClickHandler = (): void => {
    dispatch(setDate(date - 1000 * 60 * 60 * 24 * 7));
  };

  return (
    <StyledBackgroud>
      <Container>
        <StyledContent>
          <Row>
            {week.map((day, index) => (
              <StyledDay key={index}>
                <span>{weekNames[index]}</span>
                <span>{new Date(day.day).getDate()}</span>
              </StyledDay>
            ))}
          </Row>
          <Row>
            <StyledColumn>
              <button onClick={prevClickHandler}>
                <FaAngleLeft color="#dc3434" size={25} />
              </button>
            </StyledColumn>
            <StyledColumn>
              <span>
                {monthsNames[new Date(date).getMonth()]}{" "}
                {new Date(date).getFullYear()}
              </span>
            </StyledColumn>
            <StyledColumn>
              <button onClick={nextClickHandler}>
                <FaAngleRight color="#dc3434" size={25} />
              </button>
            </StyledColumn>
          </Row>
        </StyledContent>
      </Container>
    </StyledBackgroud>
  );
};

export default CalendarWeeks;
