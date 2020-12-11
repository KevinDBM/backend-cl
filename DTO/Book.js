const singleBook = (bookModel) => {
    return Object.freeze({
        id : bookModel.id,
        title : bookModel.title,
        isbn : bookModel.isbn,
        description : bookModel.description,
        image : bookModel.image,
    })
}

const completeBook = (bookModel) => {
    return Object.freeze({
        ...singleBook(bookModel),
        author : {
            id : bookModel.Author.id,
            name : bookModel.Author.name
        },
        owner : {
            id : bookModel.Owner.id,
            name : bookModel.Owner.name
        }
    })
}

const completeBooks = (books) => {
    return books.map(bookModel => completeBook(bookModel))
}

const bookSuggestions = (books) => {
    return books.map(bookModel => singleBook(bookModel))
}

module.exports = {
    singleBook,
    completeBook,
    completeBooks,
    bookSuggestions
}