const express = require('express');
const productController = require('../controllers/productController');
const userController=require('../controllers/userController')

const router = express.Router();

router.get('/', productController.getProducts);

router.get('/:prodId', productController.getProductById);

router.post('/',userController.authorizeAdmin, productController.save);

router.put('/:prodId',userController.authorizeAdmin, productController.update);

router.delete('/:prodId',userController.authorizeAdmin, productController.deleteById);

module.exports = router;