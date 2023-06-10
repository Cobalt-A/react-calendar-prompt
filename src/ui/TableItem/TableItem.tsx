import React, { FC, MouseEvent } from "react";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { calendarSlice } from "../../store/reducers/calendar";

const StyledTD = styled.td`
  border: 1px solid #e5e5e5;
  width: inherit;
  height: inherit;
`;

interface StyledItemProps {
  isActive: boolean;
}

const StyledItem = styled.div<StyledItemProps>`
  background-color: ${(props) => (props.isActive ? `#ebebfe` : `#fff`)};
  height: 100%;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.isActive ? `#ebebfe` : `#ebebfe84`)};
  }
  &:focus {
    background-color: ${(props) => (props.isActive ? `#ebebfe` : `#ebebfe84`)};
  }
`;

interface TableItemProps {
  id: number;
}

const TableItem: FC<TableItemProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const { setFocusEvent, setShowDelete } = calendarSlice.actions;
  const { events } = useAppSelector((state) => state.calendarReducer);
  const isActive = events.find((event) => event === id) ? true : false;

  const clickHandler = (event: MouseEvent<HTMLDivElement>): void => {
    isActive ? dispatch(setShowDelete(true)) : dispatch(setShowDelete(false));
    dispatch(setFocusEvent(Number(event.currentTarget.dataset.id)));
  };

  return (
    <StyledTD>
      <StyledItem
        isActive={isActive}
        onClick={clickHandler}
        data-id={id}
        tabIndex={0}
      ></StyledItem>
    </StyledTD>
  );
};

export default TableItem;
