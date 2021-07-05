const stores=require('../module/book');
exports.getstores=(req,res,next)=>{
    res.status(200).json(stores.fetchAll());
}
exports.getstoresBYid=(req,res,next)=>{
    res.status(200).json(stores.findById(req.params.bookId))
}


exports.save=(req,res,next)=>{
    const body=req.body;
    const saved=new stores(null,body.title,body.isbn,body.publishedData,body.author).save()
res.status(201).json(saved)
}
exports.update=(req,res,next)=>{
    const body=req.body;
    const upda=new stores(null,body.title,body.isbn,body.publishedData,body.author). update()
    res.status(200).json(upda)
}
exports.deleteByid=(req,res,next)=>{
    stores.deleteById(req.params.bookId)
}