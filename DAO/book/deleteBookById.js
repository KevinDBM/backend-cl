const BookModel = require('../../models/Book');

const deleteBookById = async (bookId) => {
    return await BookModel.destroy({
        where : {
            id: bookId
        }
    })
}

module.exports = deleteBookById;