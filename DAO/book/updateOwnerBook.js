const BookModel = require('../../models/Book');

const udpateOwerBook = async (bookId,newOwner) => {
    return await BookModel.update({
        owner : newOwner
    },{
        where : {
            id : bookId
        }
    })
}

module.exports = udpateOwerBook;