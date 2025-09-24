import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
    { id: 5, description: "eee", amount: 10, category: "Utilities" },
  ]);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
    console.log("Deleted", id);
  };

  return (
    <>
      <ExpenseList expenses={expenses} onDelete={handleDelete} />
    </>
  );
};
export default App;
