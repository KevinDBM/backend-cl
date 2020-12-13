const express = require('express');
const router = express();

//services
const getBooks = require('../../../services/v1/book/getBooks');
const getBook = require('../../../services/v1/book/getBook');
const getBookSuggestions = require('../../../services/v1/book/getBookSuggestions');
const createBookService = require('../../../services/v1/book/createBook');
const updateBookService = require('../../../services/v1/book/updateBook');
const deleteBookService = require('../../../services/v1/book/deleteBook');
const deleteMultipleBooksService = require('../../../services/v1/book/deleteMultipleBooks');

//middlewares
const {validateCreateBook,validateUpdateBook,validateDeleteBooks,validateBookSuggestions} = require('../../../middlewares/validationBook')
const checkErrors = require('../../../middlewares/checkErrors')
const checkAuth = require('../../../middlewares/checkAuth')
////
const checkOwnsBook = require('../../../middlewares/books/checkOwnsBook');
const checkOwnsMultipleBooks = require('../../../middlewares/books/checkOwnsMultipleBooks')
const checkAuthorExist = require('../../../middlewares/books/checkAuthorExist')

router.get('/',checkAuth, getBooks)
router.get('/suggestions',checkAuth,validateBookSuggestions(),checkErrors, getBookSuggestions)
router.get('/:bookId',checkAuth,checkOwnsBook, getBook)
router.post('/',checkAuth,validateCreateBook(),checkErrors,checkAuthorExist.required, createBookService)
router.patch('/:bookId',checkAuth,validateUpdateBook(),checkErrors,checkOwnsBook,checkAuthorExist.noRequired, updateBookService)
router.delete('/:bookId',checkAuth,checkOwnsBook, deleteBookService)
router.delete('/',checkAuth,validateDeleteBooks(),checkErrors,checkOwnsMultipleBooks, deleteMultipleBooksService)

module.exports = router