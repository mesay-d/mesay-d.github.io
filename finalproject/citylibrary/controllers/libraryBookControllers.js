const Book = require('../model/libraryBook')

module.exports.getAllBooks = async (req, res, next) => {

    console.log("1111111")
    try{
     const AllBook=await Book.listAll();
     console.log(AllBook)
    res.status(200).json(AllBook)

    }catch(error){
        next(error);
    }
   

    //res.status(200).json(Book.listAll())
}


exports.save = async (req, res, next) => {
    //req.body = //{title:"", ISBN:"", publishedDate:"", author:""..id,ISBN, BookTitle, overdue,  publisher, Datepublished}
    console.log(req.body);
    try{
        
        const book =  await new Book(null,  req.body.ISBN, req.body.BookTitle, req.body.overdue ,req.body.publisher, req.body.Datepublished ).save()
        
    res.status(201).json(book);
   

    }catch(error){
        next(error)
        

    }
    
    // const book = new Book(null,  req.body.ISBN, req.body.BookTitle, req.body.overdue ,req.body.publisher, req.body.Datepublished )
    // res.json(book.save());
}

exports.findByBookId = async (req, res, next) => {
    console.log("mesay..16778.")
    try{ 
    const book =  req.params.bookId;
    const books=await Book.findById(book)
    res.status(200).json(books)
    }catch(error){
        next(error)
    }
}

exports.updateByBookId = async (req, res, next) => {
    try{
        const book = req.body;
  const updateBook = await new Book(req.params.bookId, book.ISBN, book.BookTitle, book.overdue ,book.publisher, book.Datepublished ).update();
    res.status(200).json(updateBook)
    }catch(error){
        next(error)
    }
}
exports.deleteByBookId = async (req, res, next) => {

    try{
         await Book.deleteById(req.params.bookId);
      res.status(200).end();

    }catch(error){
        next(error)
    }
   
}
//console.log(module.exports)