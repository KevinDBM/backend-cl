const BookRequestModel = require('../../models/BookRequest');

const updateStatusBookRequest = async (bookRequestId,status) => {
    return await BookRequestModel.update(
        {status},
        {
            where : {
                id : bookRequestId
            }
        }
    )
}

module.exports = updateStatusBookRequest;