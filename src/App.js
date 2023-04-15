import {Balance} from './components/Balance'
import { Header } from './components/Header';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import './App.css';
import { GlobalProvider } from './components/context/GlobalState';

function App() {
  return (
    <GlobalProvider>
       <Header />
       <div className='container'>
          <Balance />
          <IncomeExpenses/>
          < TransactionList/> 
          <AddTransaction /> 
       </div>
    </GlobalProvider>
  );
}

export default App;
