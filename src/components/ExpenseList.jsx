const ExpenseList = ({ expenses, removeExpense }) => {
  return (
    <div>
      <h3>Expenses</h3>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.name}: Rs.{expense.cost}
            <button className="xBtn" onClick={() => removeExpense(index)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;

