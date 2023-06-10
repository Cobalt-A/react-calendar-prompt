import React, { FC, Fragment } from "react";
import CalendarHeader from "../components/Calendar/CalendarHeader/CalendarHeader";
import CalendarWeeks from "../components/Calendar/CalendarWeeks/CalendarWeeks";
import CalendarTimeTable from "../components/Calendar/CalendarTimeTable/CalendarTimeTable";

const Calendar: FC = () => {
  return (
    <Fragment>
      <CalendarHeader />
      <CalendarWeeks />
      <CalendarTimeTable />
    </Fragment>
  );
};

export default Calendar;
