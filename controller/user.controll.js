const user = require("../module/user.mod")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

const registerlog = async (req, res) => {
    let { username, password, email } = req.body
    const User = await user.findOne({ email })

    if (User) {
        res.send("already login, please login  ")
    }

    bcrypt.hash(password, 10,async (err, hash) => {
        let obj ={
            username:username,
            email:email,
            password:hash
        }
        let val = await user.create(obj)
        let token = jwt.sign({id: val.id},"token")
        res.cookie("token",token)
        res.send("register ssuccesfull")
    })
}

const loginlog = async (req, res) => {
    const { email, password } = req.body;
    let data = await user.findOne({ email });
    if (data) {
      bcrypt.compare(password, data.password, (err, result) => {
        if (result) {
          let token = jwt.sign({ id: data._id }, "token");
          res.cookie("token", token);
          res.send("register succesfull")
        } else {
          res.send({ msg: "Password incorrect" });
        }
      });
    } else {
      res.send({ msg: "User not found" });
    }
  };

module.exports={registerlog , loginlog}