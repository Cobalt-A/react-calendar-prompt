import React, { FC } from "react";
import Container from "../../../ui/Container/Container";
import styled from "styled-components";
import { useAppSelector } from "../../../hooks/redux";
import TableItem from "../../../ui/TableItem/TableItem";
import { padTo2Digits } from "../../../utils/dates/dates";

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  border: 2px solid white;
`;

const StyledTableRow = styled.tr`
  height: 50px;
`;

const StyledTimeTD = styled.td`
  width: 80px;
  border: 2px solid white;
`;

const CalendarTimeTable: FC = () => {
  const { week, hours } = useAppSelector((state) => state.calendarReducer);

  return (
    <Container>
      <StyledTable>
        <tbody>
          {hours.map((hour) => (
            <StyledTableRow key={hour}>
              <StyledTimeTD>
                {padTo2Digits(new Date(hour).getHours())}:00
              </StyledTimeTD>
              {week.map((day, i) => (
                <TableItem id={hour + i} key={hour + i} />
              ))}
            </StyledTableRow>
          ))}
        </tbody>
      </StyledTable>
    </Container>
  );
};

export default CalendarTimeTable;
