const http=require('http')

const express=require('express')

const app=express();



app.use('/text',(req,res,next)=>{
    res.send("<h1>text page</h1>")
    
})

app.use('/',(req,res,next)=>{
    res.send("<h1>hello from express js</h1>")
})

app.listen(3000)

