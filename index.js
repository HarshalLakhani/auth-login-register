const express = require('express')
const cookie = require('cookie-parser')
const connected = require('./config/db')
const user = require('./router/user')



const app =express()
app.use(cookie())
app.use(express.json())
app.use("/user",user)

app.get("/",(req,res)=>{
   res.send("slash page")
})

app.listen(9999,()=>{
    console.log("server on line")
    connected()
})