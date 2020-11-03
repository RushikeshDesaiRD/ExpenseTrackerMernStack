const Transactions=require('../models/Transactions.js')
exports.getTransactions = async (req, res, next) =>{
   try {
       const transactions=await Transactions.find()
       return res.status(200).json({
           success:true,
           data:transactions,
           count:transactions.length
       })
   } catch (error) {
       console.log(error)
   }
}

exports.postTransactions = async (req, res, next) =>{
    const {text, amount} =req.body
    try {
        const transactions=await Transactions.create(req.body)
        return res.status(201).json({
            data:transactions,
            success:true
        })
    } catch (error) {
        if(error.name = 'ValidationError'){
             const message=Object.values(error.error).map(val => val.message)
              return res.status(400).json({
                success:false,
                error:message
               })
        }else{
             return res.status(500).json({
                success:false,
                error:'Server Eroor'
               })
        }
         
    }
}

exports.deleteTransactions = async(req, res, next)=>{
    try {
        const transaction= await Transactions.findById(req.params.id)
        if(!transaction){
            return res.status(400).json({
                success:false,
                error:'Not Found'
               })
        }

        transaction.remove()
        return res.status(200).json({
            success:true,
            data:{}
        })
    } catch (error) {
        
    }
}
exports.putTransactions = (req, res, next)=>{
     res.send("putTransactions")
}