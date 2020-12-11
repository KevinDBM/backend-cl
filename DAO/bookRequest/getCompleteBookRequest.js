const BookRequestModel = require('../../models/BookRequest');
const BookModel = require('../../models/Book');
const UserModel = require('../../models/User');

const getCompleteBookRequest = async (bookRequestId) => {
    return await BookRequestModel.findOne({
        where : {
            id : bookRequestId
        },
        include : [
            {
                model : BookModel,
                as : 'RequestedBook'
            },
            {
                model : BookModel,
                as : 'BookToBarter'
            },
            {
                model : UserModel,
                as : 'RequestingUser'
            }
        ]
    })
}

module.exports = getCompleteBookRequest;