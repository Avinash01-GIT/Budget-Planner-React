import './App.css'
import BudgetPlanner from './components/BudgetPlanner'

const App = () => {
  return (
    <div className='App'>
      <BudgetPlanner initialBudget={2000}/>
    </div>
  )
}

export default App
