import React,{useContext,useEffect} from 'react'
import {GlobalContext} from '../context/GlobalContext'
import Transaction from './Transaction.js'
export default function TransactionList() {
    const { transactions, getTransactions } = useContext(GlobalContext)
   useEffect(() => {
    getTransactions()
   },[])
    return (
        <>
         <h5 className="mt-2 his-2">History</h5>
           {
        transactions.map(transactions => (
           <Transaction key={transactions.id} transactions={transactions}/>
               ))
           }
        </>
    )
}
