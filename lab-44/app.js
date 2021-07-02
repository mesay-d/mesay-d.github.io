const express=require('express')

const userRouter=require('./routes/user')
const productRouter=require('./routes/product')
const path=require('path')
const app=express()

app.use('/user',userRouter)
app.use('/product',productRouter)
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'view','index.html'))

})
app.use((req,res,next)=>{
   res.status(404)
     res.sendFile(path.join(__dirname,"view","404.html"))
})
app.use(function(err,req,res,next){
    res.status(500).send("something wrong")
})
app.listen(3000,()=>console.log("listenig on 3000"))