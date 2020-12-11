const getBookRequestByOwnBook = require('../DAO/bookRequest/getBookRequestByOwnBook');

const ownsBookRequest = async (userId,bookRequestId) => {
    const resultDAO = await getBookRequestByOwnBook(userId,bookRequestId);

    return resultDAO ? true : false;
}

module.exports = ownsBookRequest;