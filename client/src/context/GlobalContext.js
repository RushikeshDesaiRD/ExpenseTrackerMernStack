import React,{createContext, useReducer} from 'react'
import axios from 'axios'
import AppReducer from './AppReducer'
const initialState = {
    transactions:[],
    error:null,
    loading:true
}

export const GlobalContext = createContext(initialState);


export const GlobalProvider=({children}) => {
   const [state, dispatch]=useReducer(AppReducer,initialState)
 async function getTransactions(){
    try {
         const res = await axios.get('/transactions')
         dispatch({
             type:'GET',
             payload:res.data.data
         })
    } catch (error) {
        //   dispatch({
        //      type:'ERROR',
        //      payload:err.response.data.error
        //  })
    }

   }
async function deleteTransactions(id) {
    try {
        await axios.delete(`/transactions/${id}`)
         dispatch({
        type:"DELETE",
        payload:id
    })
    } catch (error) {
        
    }
   
    
}
async function addTransactions(Transaction) {
    // dispatch({
    //     type:"ADD",
    //     payload:Transaction
    // })


    const config ={
        headers:{
            'Content-Type':'application/json'
        }
    }
    try {
        const res= await axios.post('/transactions', Transaction,config)
         dispatch({
        type:"ADD",
        payload:res.data.data
    })
    } catch (error) {
        
    }
}

   return (
       <GlobalContext.Provider value={{transactions:state.transactions,
       getTransactions,
       loading:state.loading,
        deleteTransactions,
        addTransactions
        }}>
          {children}
       </GlobalContext.Provider>   


   )
}
