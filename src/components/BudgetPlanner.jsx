import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import BudgetChart from "./BudgetChart";

const BudgetPlanner = ({ initialBudget }) => {
  const [budget, setBudget] = useState(initialBudget);
  const [expenses, setExpenses] = useState([]);

  const totalExpenses = expenses.reduce(
    (acc, expense) => acc + expense.cost,
    0
  );
  const remainingBudget = budget - totalExpenses;

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const removeExpense = (index) => {
    const newExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(newExpenses);
  };

  const handleBudgetChange = (e) => {
    setBudget(Number(e.target.value));
  };

  return (
    <>
      <div className="container">
        <div className="left">
          <h1 className="title">My Budget Planner</h1>
          <div className="budget-summary">
            <div>
              Budget:
              <input
                type="number"
                value={budget}
                onChange={handleBudgetChange}
              />
            </div>
            <div>Remaining: Rs.{remainingBudget}</div>
            <div>Spent so far: Rs.{totalExpenses}</div>
          </div>
          <ExpenseForm addExpense={addExpense} />
          <ExpenseList expenses={expenses} removeExpense={removeExpense} />
        </div>
        <div className="right">
        <BudgetChart total={budget} spent={totalExpenses} />
      </div>
      </div>
    </>
  );
};

export default BudgetPlanner;
