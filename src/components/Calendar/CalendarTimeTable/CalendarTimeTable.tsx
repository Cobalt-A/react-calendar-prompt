import React, { FC } from "react";
import Container from "../../../ui/Container/Container";
import styled from "styled-components";
import { useAppSelector } from "../../../hooks/redux";
import TableItem from "../../../ui/TableItem/TableItem";
import { padTo2Digits, getHours } from "../../../utils/dates/dates";
import Row from "../../../ui/Row/Row";

const StyledSection = styled.div`
  overflow: hidden;
`;

const StyledTable = styled.div`
  width: 100%;
  margin-top: -1px;
  margin-bottom: -1px;
`;

const StyledOverflow = styled.div`
  width: 100%;
  overflow: hidden;
`;

const StyledTableRow = styled.div`
  display: flex;
  margin-right: -2px;
  margin-left: -2px;
`;

const StyledTimeItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
  color: rgb(185, 185, 185);
`;

const StyledTimeColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 60px;
  padding-top: 48px;
  padding-bottom: 48px;
`;

const CalendarTimeTable: FC = () => {
  const { week } = useAppSelector((state) => state.calendarReducer);
  const hours = getHours();

  return (
    <StyledSection>
      <Container>
        <Row>
          <StyledTimeColumn>
            {hours.slice(1, hours.length).map((hour) => (
              <StyledTimeItem key={hour}>{padTo2Digits(hour)}:00</StyledTimeItem>
            ))}
          </StyledTimeColumn>
          <StyledTable>
            {hours.map((hour) => (
              <Row key={hour}>
                <StyledOverflow>
                  <StyledTableRow>
                    {week.map((day, i) => (
                      <TableItem day={day.day} hour={hour} key={i} />
                    ))}
                  </StyledTableRow>
                </StyledOverflow>
              </Row>
            ))}
          </StyledTable>
        </Row>
      </Container>
    </StyledSection>
  );
};

export default CalendarTimeTable;
