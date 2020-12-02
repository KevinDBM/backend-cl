const BookModel = require('../../models/Book')

const createBook = async(title,isbn,description,author,image,owner) => {
    return await BookModel.create({
        title,isbn,description,author,owner,image
    })
}

module.exports = createBook