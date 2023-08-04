import React from "react";
import "./ExpenseFilter.css";
export const ExpenseFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeHandler(event.target.value);
  };
  return (
    <div className="expense-filter">
      <div className="expense-filter_group">
        <label>Filter</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};
