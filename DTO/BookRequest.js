const {singleBook} = require('./Book');
const {singleUser} = require('./User')

const completeBookRequest = (bookRequestModel) => {
    let tmpReturn ={
        id : bookRequestModel.id,
        requestedBook : singleBook(bookRequestModel.RequestedBook),
        requestingUser : singleUser(bookRequestModel.RequestingUser)
    }

    if(bookRequestModel.BookToBarter){
        tmpReturn.bookToBarter = singleBook(bookRequestModel.BookToBarter)
    }
    else{
        tmpReturn.priceOffered = parseFloat(bookRequestModel.price_offered);
    }
    
    return  Object.freeze(tmpReturn);
}

module.exports = {
    completeBookRequest
}