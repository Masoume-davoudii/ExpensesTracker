import React from "react";
import { ExpenseForm } from "./ExpenseForm";
import "./AddExpense.css";

export const AddExpense = (props) => {
  const onSaveData = (entereData) => {
    props.onAddNewExpense(entereData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={onSaveData} />
    </div>
  );
};
