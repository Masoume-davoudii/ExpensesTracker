import { Expenses } from "./Components/Expenses/Expenses";
import { AddExpense } from "./Components/AddExpense/AddExpense";
import { useState } from "react";
const INITIAL_EXPENSES = [
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
  {
    id: "4e",
    date: new Date(2022, 1, 13),
    title: "T-shirt",
    amount: 50,
  },
];
function App() {
  const [expenseItems, setExpenseItems] = useState(INITIAL_EXPENSES);
  const onAddNewExpense = (finalEnteredData) => {
    setExpenseItems((prevState) => {
      return [finalEnteredData, ...prevState];
    });
  };
  return (
    <div className="App">
      <AddExpense onAddNewExpense={onAddNewExpense} />
      <Expenses expenseItems={expenseItems} />
    </div>
  );
}

export default App;
