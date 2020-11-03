const mongoose=require("mongoose")

try {
  mongoose.connect('mongodb://localhost:27017/expensetracker', 
{useNewUrlParser: true, useUnifiedTopology: true})
console.log("Mongo Db Connneced")  
} catch (error) {
    console.log(error)
}