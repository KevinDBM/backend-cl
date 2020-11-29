module.exports = {
    completeBook : (bookModel) => {
        return Object.freeze({
            id : bookModel.id,
            title : bookModel.title,
            isbn : bookModel.isbn,
            description : bookModel.description,
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
}