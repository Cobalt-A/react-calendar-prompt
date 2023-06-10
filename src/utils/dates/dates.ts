import { IDay } from "../../types/IDay";

export const getWeekByDate = (date = new Date()): IDay[] => {
  return Array(7)
  .fill(new Date(date))
  .map((el, idx) => {
    const day = new Date(el.setDate(el.getDate() - el.getDay() + idx + 1));
    if (day.getDate() === new Date().getDate()) {
      return { isCurrentDay: true, day: day.getTime() };
    }
    return { isCurrentDay: false, day: day.getTime() };
  });
};

export const hours = [
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
];

export const weekNames = ["m", "t", "w", "t", "f", "s", "s"];

export const monthsNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
