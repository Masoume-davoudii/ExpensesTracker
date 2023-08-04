import React, { useState } from "react";
import { ExpenseFilter } from "./ExpenseFilter";
import "./Expenses.css";
import { ExpensesList } from "./ExpensesList";
import { ExpenseChart } from "./ExpenseChart";
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
      <ExpenseChart expenses={filteredExpensesItem} />
      <ExpensesList items={filteredExpensesItem} />
    </div>
  );
};
