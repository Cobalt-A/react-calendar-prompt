import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getWeekByDate } from "../../utils/dates/dates";
import { IDay } from "../../types/IDay";

interface CalendarState {
  week: IDay[];
  date: number;
}

const initialState: CalendarState = {
  week: getWeekByDate(new Date()),
  date: new Date().getTime(),
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setDate: (state, action: PayloadAction<number>) => {
      state.date = action.payload;
      state.week = getWeekByDate(new Date(action.payload));
    },
  },
});

export default calendarSlice.reducer;
