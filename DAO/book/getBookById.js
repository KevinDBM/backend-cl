const BookModel = require('../../models/Book');

const getBookById = async (bookId) => {
    return await BookModel.findByPk(bookId)
}

module.exports = getBookById;