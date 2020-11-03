const express=require("express")
const { getTransactions,postTransactions,deleteTransactions,putTransactions } =require("../controllers/Transactions.js")
const router=express.Router()
router.route('/').get(getTransactions)
.post(postTransactions)
router.route('/:id').put(putTransactions)
.delete(deleteTransactions)

module.exports=router
