import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext'
export default function Transaction({transactions}) {
    const sign = transactions.amount < 0 ? '-' :'+'
    const {deleteTransactions}=useContext(GlobalContext)
    return (
        <ul className="list-group">
         <li className={transactions.amount < 0 ? 'transaction':'transactiontwo'}>
        <div className="row p-1">
           <div className="col-2">
              <button onClick={() => deleteTransactions(transactions._id)} className="btn-delete"><i class="fa fa-times" aria-hidden="true"></i></button>
           </div>
          <div className="col-5">
             <h6>{transactions.text}</h6>
          </div>  
           <div className="col-5">
               <h6>{sign} ${ Math.abs(transactions.amount)}.00</h6>
          </div>  
        </div>
        </li>
         </ul>
    )
}
