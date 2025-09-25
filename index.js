require('dotenv').config()
const express = require("express")


const app = express()
const port = 2000

app.listen(process.env.PORT ,()=> {
    console.log(`app is listning on port ${port}`);
    
})
app.get('/',(req,res) => {
    res.send("hello everyone")
})

app.get('/twitter',(req,res)=>{
    res.send("this is twitter")
})
