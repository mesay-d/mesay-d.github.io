const express = require('express');
const bookContr=require('../controllers/bookControllers')
const router = express.Router();

router.get('/',bookContr.getstores);
router.get('/:bookId',bookContr.getstoresBYid);
router.post('/',bookContr.save);
router.put('/:bookId',bookContr.update)
router.delete('/:bookId',bookContr.deleteByid)



module.exports = router;