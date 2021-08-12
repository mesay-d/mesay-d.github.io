const express = require('express');
const app = express();

const bookRouter = require('./routes/libraryBook')
//const authRouter = require('./routes/authRouter')
//const cartRouter = require('./routes/cartRouter')
const mongoConnect = require('./utilis/databases').mongoConnect;
const cors = require('cors')




app.use(cors())             // request enter this
app.use(express.json())  
   // request enter this


                   //app.use(authRouter);        // reuest enter this //check have token or not
app.use(bookRouter); 
//app.use(cartRouter);citylibrary/api

//http://localhost:3000/citylibrary/api/book/list.....show all list
//https://localhost/citylibrary/api/book/add...add save...post request

// app.use('/citylibrary/api', bookRouter)
/**
{
    "id": "3",
       "BookTitle": "Database system concept,6th Edition",
       "isbn": "978-0073523323",
       "Datepublished": "2011-05-19",
       "publisher": "McGraw-Hall",
       "overdue": "$1.47"
}
 */



app.use((req, res, next) =>{
    res.status(404).json({error: err.message})
})

// app.use((err, req, res, next) => {
//     if(err.message === "ITEM NOT FOUND"){
//         res.status(404).json({error: err.message})
//     } else {
//         res.status(500).json({error: "Try again"})
//     }
// })


mongoConnect(()=>{
app.listen(3000, ()=>console.log("Running server 3000"));
})







