const BookRequestModel = require('../../models/BookRequest');
const BookModel = require('../../models/Book');
const UserModel = require('../../models/User');
const {bookRequestStatusEnum} = require('../../utils/enums')
const {Op} = require('sequelize')

const getMyCompleteBookRequests = async (userId,limit,offset) => {
    return await BookRequestModel.findAndCountAll({
        where : {
            status : String(bookRequestStatusEnum.Pendiente.code)
        },
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
        ],
        limit,
        offset
    })
}

module.exports = getMyCompleteBookRequests;