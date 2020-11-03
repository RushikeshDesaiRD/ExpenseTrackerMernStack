export default (state, action) => {
    switch (action.type) {
        case 'GET':
        return {
            ...state,
            error:false,
            transactions:action.payload
        }
       case 'DELETE':
       return {
           ...state,
           transactions:state.transactions.filter(transaction => transaction._id !== action.payload)
       }
       break;
       case 'ADD':
       return {
           ...state,
           transactions:[ ...state.transactions, action.payload]
       }
       break;
        default:
        return state;
            break;
    }
}