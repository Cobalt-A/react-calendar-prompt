import React, { FC } from "react";
import Container from "../../../ui/Container/Container";
import styled from "styled-components";
import { useAppSelector } from "../../../hooks/redux";
import { hours } from "../../../utils/dates/dates";

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  border: 2px solid white;
`;

const StyledTableRow = styled.tr`
  height: 50px;
`;

const StyledTD = styled.td`
  border: 1px solid #e5e5e5;
`;

const StyledTimeTD = styled.td`
  width: 80px;
  border: 2px solid white;
`;

const CalendarTimeTable: FC = () => {
  const { week } = useAppSelector((state) => state.calendarReducer);

  return (
    <Container>
      <StyledTable>
        <tbody>
          {hours.map((hour) => (
            <StyledTableRow key={hour}>
              <StyledTimeTD>{hour}</StyledTimeTD>
              {week.map((day, i) => (
                <StyledTD key={i}></StyledTD>
              ))}
            </StyledTableRow>
          ))}
        </tbody>
      </StyledTable>
    </Container>
  );
};

export default CalendarTimeTable;
