const express=require("express")
const dotenv=require("dotenv")
const colors=require("colors")
const morgan=require("morgan")
const Routers=require("./routers/Transactions.js")
const Db=require('./db.js')
const Transactions=require('./models/Transactions.js')
const app=express()

const port = 5000
app.use(express.json())
if('development'==='development'){
  app.use(morgan('dev'))
}
app.use('/transactions' ,Routers)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
