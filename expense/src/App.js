import './App.css';
import { Balance } from './Balance.js';
import { IncomeExpense } from './IncomeExpense.js';
import {Transaction} from './Transaction.js';
import { AddTransacrion } from './AddTransacrion.js';

import { GlobalProvider } from './context/GlobalState';

 
function App() {
  return (
    <GlobalProvider>
    <>
      <h2 >Expense Tracker</h2>
      <br />
      <Balance />
      <IncomeExpense />
      <Transaction />
      <AddTransacrion />

      </>
        </GlobalProvider>
     
    
  );
}

export default App;
