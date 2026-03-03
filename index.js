require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())


app.get("/" ,(req,res)=>{
    res.send("<h2>This is a home page of my web app</h2>")
})

app.get("/news" , (req,res)=>{
    res.send("<h2>This is a news page of my web app</h2>")
})

app.get("user",(req,res)=>{
    res.send("<h2>plase login here</h2>")
})
const port = 4000
app.listen(process.env.PORT || port,()=>{
    console.log(`server is running on port ${port}`)
})