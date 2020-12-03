const BookModel = require('../../models/Book');
const {Op} = require('sequelize')

const getBooksNoOwns = async (bookIds,userId) => {
    return await BookModel.findAll({
        where : {
            id : {
                [Op.in] : bookIds
            }
        }
    })
}

module.exports = getBooksNoOwns;