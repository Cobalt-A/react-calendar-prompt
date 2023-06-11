import React, { FC, MouseEvent } from "react";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { calendarSlice } from "../../store/reducers/calendar";
import { getHourId } from "../../utils/dates/dates";

const StyledTableItem = styled.div`
  border: 1px solid #e5e5e5;
  width: inherit;
  height: inherit;
  width: calc(100% / 7);
`;

interface StyledItemProps {
  active: string;
}

const StyledItem = styled.div<StyledItemProps>`
  background-color: ${(props) => (props.active === "true" ? `#ebebfe` : `#fff`)};
  aspect-ratio: 1/1;
  border: 2px solid white;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: rgb(178, 182, 253);
  }
  &:focus {
    background-color: rgb(178, 182, 253);
  }
`;

interface TableItemProps {
  day: number;
  hour: number;
}

const TableItem: FC<TableItemProps> = ({ day, hour }) => {
  const id = getHourId(new Date(day), hour);
  const dispatch = useAppDispatch();
  const { setFocusEvent, setShowDelete } = calendarSlice.actions;
  const { events } = useAppSelector((state) => state.calendarReducer);
  const isActive = events.find((event) => event === id) ? true : false;

  const clickHandler = (event: MouseEvent<HTMLDivElement>): void => {
    isActive ? dispatch(setShowDelete(true)) : dispatch(setShowDelete(false));
    dispatch(setFocusEvent(Number(event.currentTarget.dataset.id)));
  };

  return (
    <StyledTableItem>
      <StyledItem
        active={String(isActive)}
        onClick={clickHandler}
        data-id={id}
        tabIndex={0}
      />
    </StyledTableItem>
  );
};

export default TableItem;
