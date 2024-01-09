const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String
})

let user = mongoose.model("user",userSchema)

module.exports = user