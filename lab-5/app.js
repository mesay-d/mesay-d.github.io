const express=require('express')

const bookRouter = require('./routes/book')
const cors = require('cors');
const app=express();

app.use(express.json())
app.use(cors());



app.use('/books', bookRouter);
app.use((req,res,next)=>{
    res.status(404).json({error:req.url+' api not support'})
})
app.use((err,req,res,next)=>{
    if(err.message=="not found"){
       res.status(404).json({error:error.message+' api not support'})  
    }else{
        res.status(5000).json({error:' something is wrong! try later '})
    }
   
})


app.listen(3000,()=>console.log("i am listening...3000"))