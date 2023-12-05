const express = require('express')
const app=express();
const port =3000;
const mongoose = require("mongoose")
require('dotenv').config();
const cors = require('cors');

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("connected to mongo");
    app.listen(()=>{
        console.log("server started on port 3000");
    })
}).catch(err=>{
    console.log(err);
})
app.use(express.json());

const User = require('./Routes/user')


app.use(cors({
    credentials: true,
    origin: 'https://656f39007be47b0080534967--cosmic-capybara-0d999c.netlify.app'
}));

app.use(User)

app.get("/",(req,res)=>{
    res.send("hello")
})


app.listen(port,()=>{
    console.log("server is listening at port 3000")
})

