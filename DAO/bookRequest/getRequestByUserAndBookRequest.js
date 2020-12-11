const BookRequestModel = require('../../models/BookRequest');

const getRequestByUserAndBookRequest = async (userId,requestedBook) => {
    return await BookRequestModel.findAll({
        where : {
            requesting_user : userId,
            requested_book : requestedBook
        }
    })
}

module.exports = getRequestByUserAndBookRequest;