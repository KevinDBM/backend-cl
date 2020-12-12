const BookRequestModel = require('../../models/Book')

const getBookRequestById = async (bookRequestId) => await BookRequestModel.findByPk(bookRequestId)

module.exports = getBookRequestById;