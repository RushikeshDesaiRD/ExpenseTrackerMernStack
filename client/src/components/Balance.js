import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext'
export default function Balance() {
    const {transactions}=useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount)
    const total=amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
    return (
        <div>
             <h5 className="text-center"><br/>Your Ballance ${total}</h5>
        </div>
    )
}
