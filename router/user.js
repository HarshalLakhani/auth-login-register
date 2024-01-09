const { Router } = require("express")
const { registerlog, loginlog } = require("../controller/user.controll")
const Auth = require("../middleware/auth")

const user = Router()

user.post('/register',registerlog)
user.post('/login',Auth,loginlog)


module.exports = user