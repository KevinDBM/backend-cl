const BookModel = require('../../models/Book')

const createBook = async(title,isbn,description,author,owner) => {
    return await BookModel.create({
        title,isbn,description,author,owner
    })
}

module.exports = createBook