const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();

// middleware
app.use(express.json())
app.use(cors())

// mongoose.connect("mongodb://127.0.0.1:27017/user")

mongoose.connect("mongodb://localhost:27017/Authentication")
.then(() => console.log("DB Connected"))
.catch((err) => {console.log(err)})

const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const User  = new mongoose.model("data", schema)

app.post("/register", async(req,res) =>{
    const emailExists = await User.findOne({ email: req.body.email });

    if (emailExists) {res.send({ message:"Email allready exists"});}
    else{
        User.create(req.body)
        .then((emp) => {
            res.json(emp)
            // isAuthenticated = true;
        })
        .catch(err => console.log(err))
}})

app.post("/login", async(req,res)=>{
    const {email, password , isAuthenticated} = req.body
    const user = await User.findOne({ email: email });
    console.log(user);
if (user) {
    if(password === user.password){
        res.send({ message: "Login Successfully", user: user,isAuthenticated : true}) 
    } else{
        res.send({ message: "Password Didn't Match"})
    }
}
else{ res.status(400).send({message: "User Not Found"});}
})


const port = 3001;
app.listen(port , ()=>{
    console.log(`App running at port ${port}`)
})