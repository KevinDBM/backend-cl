const BookRequestModel = require('../../models/BookRequest');
const BookModel = require('../../models/Book');
const {bookRequestStatusEnum} = require('../../utils/enums')

const getBookRequestByOwnBook = async (userId,bookRequestId) => {
    return await BookRequestModel.findOne({
        where : {
            id : bookRequestId,
            status : String(bookRequestStatusEnum.Pendiente.code)
        }, 
        include : {
            model : BookModel,
            as : 'RequestedBook',
            required : true,
            where : {
                owner : userId
            }
        }
    })
}

module.exports = getBookRequestByOwnBook;