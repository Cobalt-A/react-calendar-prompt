import React, { FC } from "react";
import Container from "../../../ui/Container/Container";
import styled from "styled-components";
import { useAppSelector } from "../../../hooks/redux";
import TableItem from "../../../ui/TableItem/TableItem";
import { padTo2Digits } from "../../../utils/dates/dates";
import Row from "../../../ui/Row/Row";

const StyledSection = styled.div`
  overflow: hidden;
`;

const StyledTable = styled.div`
  width: 100%;
  margin-top: -1px;
  margin-bottom: -1px;
`;

const StyledTableRow = styled.div`
  width: 100%;
  overflow: hidden;
`;

const StyledTableRow2 = styled.div`
  display: flex;
  margin-right: -2px;
  margin-left: -2px;
`;

const StyledTimeItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
`;

const CalendarTimeTable: FC = () => {
  const { week, hours } = useAppSelector((state) => state.calendarReducer);

  return (
    <StyledSection>
      <Container>
        {/* <StyledTable>
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
      </StyledTable> */}
        <StyledTable>
          {hours.map((hour) => (
            <Row key={hour}>
              <StyledTimeItem>
                {padTo2Digits(new Date(hour).getHours())}:00
              </StyledTimeItem>
              <StyledTableRow>
                <StyledTableRow2>
                  {week.map((day, i) => (
                    <TableItem id={hour + i} key={hour + i} />
                  ))}
                </StyledTableRow2>
              </StyledTableRow>
            </Row>
          ))}
        </StyledTable>
      </Container>
    </StyledSection>
  );
};

export default CalendarTimeTable;
