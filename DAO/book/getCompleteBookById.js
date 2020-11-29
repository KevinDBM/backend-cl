const BookModel = require('../../models/Book');
const AuthorModel = require('../../models/Author');
const UserModel = require('../../models/User');

const getCompleteBookById = async (bookId) => {
    return await BookModel.findOne({
        where : {id:bookId},
        include : [AuthorModel,{
            model : UserModel,
            as : 'Owner'
        }]
    })
}

module.exports = getCompleteBookById;