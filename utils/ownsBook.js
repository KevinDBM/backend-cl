const getBookById = require('../DAO/book/getBookById');

const ownsBook = async (bookId,userId) => {
    const bookInfo = await getBookById(bookId);
    return bookInfo && parseInt(bookInfo.owner) === parseInt(userId) ? bookInfo : null;
}

module.exports = ownsBook;