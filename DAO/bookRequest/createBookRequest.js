const BookRequestModel = require('../../models/BookRequest');

const createBookRequestDAO = async (requestingUser,requestedBook,bookToBarter,priceOffered) =>  {
    return await BookRequestModel.create({
        requesting_user : requestingUser,
        requested_book : requestedBook,
        book_to_barter : bookToBarter,
        price_offered : priceOffered
    })
}

module.exports = createBookRequestDAO;