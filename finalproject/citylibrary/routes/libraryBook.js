const express = require('express');
const router = express.Router();
const bookController = require('../controllers/libraryBookControllers')

//const userController = require('../controller/userController')

router.get('/citylibrary/api/book/list', bookController.getAllBooks);
router.get('/citylibrary/api/book/list/:bookId', bookController.findByBookId)
router.post('/citylibrary/api/book/add',  bookController.save)    //router.post('/books', userController.authorizeAdmin, bookController.save)
router.put('/citylibrary/api/book/list/:bookId', bookController.updateByBookId)  //router.put('/books/:bookId', userController.authorizeAdmin, bookController.updateByBookId)
router.delete('/citylibrary/api/book/list/:bookId',  bookController.deleteByBookId)  //router.delete('/books/:bookId', userController.authorizeAdmin,  bookController.deleteByBookId)



module.exports = router;