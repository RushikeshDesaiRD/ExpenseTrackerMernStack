import React,{useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext'
export default function AddTransaction() {
    const { addTransactions} = useContext(GlobalContext)
    const [text, setText]=useState();
    const [amount, setAmount]=useState(0)
    const onSubmitForm = e =>{
       
        e.preventDefault()
        const newTransactions={
            id:Math.floor(Math.random() * 10000),
            text,
            amount:+amount
        }
        addTransactions(newTransactions)
         
    }
    return (
        <div className="mt-3 pb-2 mb-2">
            <h5>Add New Transaction</h5>
              <form onSubmit={onSubmitForm}>
             <label>Text</label>
             <input type="text" value={text} onChange={(e) => setText(e.target.value) } className="form-text"/>
              <label className="mt-3">Amount</label>
              <br/>
              <label className="des-font-size">(negative Expense & positive Income)</label>
               <input type="text" value={amount} onChange={(e) => setAmount(e.target.value) } className="form-text"/>
               <br/>
               <input type="submit" className="form-btn shadow-lg" value="Add"/>
              </form>
        </div>
    )
}
