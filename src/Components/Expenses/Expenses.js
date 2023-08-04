import React, { useState } from "react";
import { ExpenseFilter } from "./ExpenseFilter";
import "./Expenses.css";
import { ExpensesList } from "./ExpensesList";
export const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");

  const onChangeFilter = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpensesItem = props.expenseItems.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeHandler={onChangeFilter} />
      <ExpensesList items={filteredExpensesItem} />
    </div>
  );
};
