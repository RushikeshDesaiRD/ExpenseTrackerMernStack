const mongoose=require("mongoose")
const transaction=new mongoose.Schema({
  text:{
      type:String,
      trim:true,
      required:[true,'Text Field Required']
  },
  amount:{
       type:Number,
      trim:true,
      required:[true,'Text Field Required']
  },
  createDate:{
      type:Date,
      default:Date.now
  }
})
module.exports=mongoose.model('transaction',transaction)