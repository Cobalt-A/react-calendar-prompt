import { IDay } from "../../types/IDay";

export const getWeekByDate = (date: Date): IDay[] => {
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

export const getHours = (date: Date): number[] => {
  date.setMinutes(0);
  date.setHours(0);
  return Array(24)
  .fill(new Date(date))
  .map((el: Date, idx) => {
    return new Date(el.getTime()).setHours(idx);
  });
};

export const padTo2Digits = (num: number) => {
  return num.toString().padStart(2, "0");
};

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
