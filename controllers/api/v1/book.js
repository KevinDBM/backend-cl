const express = require('express');
const router = express.Router();

//services
const getBooks = require('../../../services/v1/book/getBooks');
const createBookService = require('../../../services/v1/book/createBook');
const updateBookService = require('../../../services/v1/book/updateBook');
const deleteBookService = require('../../../services/v1/book/deleteBook');

//middlewares
const {validateCreateBook,validateUpdateBook} = require('../../../middlewares/validationBook')
const checkErrors = require('../../../middlewares/checkErrors')
const checkAuth = require('../../../middlewares/checkAuth')
////
const checkOwnsBook = require('../../../middlewares/books/checkOwnsBook');
const checkAuthorExist = require('../../../middlewares/books/checkAuthorExist')

router.get('/',checkAuth, getBooks)
router.post('/',checkAuth,validateCreateBook(),checkErrors,checkAuthorExist.required, createBookService)
router.patch('/:bookId',checkAuth,validateUpdateBook(),checkErrors,checkOwnsBook,checkAuthorExist.noRequired, updateBookService)
router.delete('/:bookId',checkAuth,checkOwnsBook, deleteBookService)

module.exports = router