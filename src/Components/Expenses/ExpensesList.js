import React from "react";
import { ExpenseItem } from "./ExpenseItem";
import "./ExpensesList.css";

export const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <p className="not-found">No Expense Found</p>;
  }
  return (
    <ul className="expense-list">
      {props.items.map((item) => (
        <ExpenseItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
