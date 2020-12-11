const BookRequestModel = require('../../models/BookRequest');
const BookModel = require('../../models/Book');
const UserModel = require('../../models/User');

const getMyCompleteBookRequests = async (userId,limit,offset) => {
    return await BookRequestModel.findAndCountAll({
        include : [
            {
                model : BookModel,
                as : 'RequestedBook',
                required : true,
                where : {
                    owner : userId
                }
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

module.exports = getMyCompleteBookRequests;