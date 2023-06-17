const express=require('express')

const path=require('path')
const router=express.Router()

router.get('/get',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','view','add-product.html'))
})

router.post('/read',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
})
module.exports= router
