const BookModel = require('../../models/Book');

const updateBook = async (bookId,newInfo) => {
    let fieldsUpdate = {};
    if(newInfo.title) fieldsUpdate.title = newInfo.title;
    if(newInfo.isbn) fieldsUpdate.isbn = newInfo.isbn;
    if(newInfo.description) fieldsUpdate.description = newInfo.description;
    if(newInfo.author) fieldsUpdate.author = newInfo.author;

    return await BookModel.update(
        fieldsUpdate,
        {
            where : {
                id : bookId
            }
        }
    )
}

module.exports = updateBook;