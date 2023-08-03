import React from "react";
import { ExpenseItems } from "./ExpenseItems";
import "./Expenses.css";
export const Expenses = () => {
  const items = [
    {
      id: "1e",
      date: new Date(2020, 3, 12),
      title: "Car Insurance",
      amount: 90.6,
    },
    {
      id: "2e",
      date: new Date(2021, 5, 5),
      title: "Pen",
      amount: 4.6,
    },
    {
      id: "3e",
      date: new Date(2022, 11, 13),
      title: "Smartphone",
      amount: 500,
    },
  ];
  return (
    <div className="expenses">
      {items.map((item) => (
        <ExpenseItems key={item.id} item={item} />
      ))}
    </div>
  );
};
