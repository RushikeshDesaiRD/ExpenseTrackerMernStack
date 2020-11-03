import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext'
export default function IncomeBalance() {
  const {transactions}=useContext(GlobalContext)
  const amounts=transactions.map(transaction => transaction.amount )
  const income = amounts
  .filter(item => item > 0)
  .reduce((acc, item) => (acc += item), 0)
  .toFixed(2)

  const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0 * -1)).toFixed(2)
    return (
        <div className="row text-center">
        <br/>
            <div className="col-5 mx-auto plus bordered">
               <h5>Income</h5>
               <h6 className=""> $+ {income}</h6>
             </div>
             <div className="col-5 mx-auto minus bordered">
                
               <h5>Expense</h5>
               <h6 className=""> $ {expense}</h6>
            
             </div>
        </div>
    )
}
