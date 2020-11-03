import React from 'react';
import Header from './components/Header'
import IncomeBalance from './components/IncomeBalance'
import Balance from './components/Balance'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction.js'
import {GlobalProvider} from './context/GlobalContext'
import './App.css';

function App() {
  return (
   <GlobalProvider>
    
     <div className="container">
     
      <div className="col-md-4 mx-auto expensess-tracker2">
         <Header/>
      </div>
      
        <div className="col-md-4 mx-auto expensess-tracker">
          
              <Balance/>
              <IncomeBalance/>
               <TransactionList/>
               <AddTransaction/>
         </div>
     </div>
   </GlobalProvider>
  );
}

export default App;
