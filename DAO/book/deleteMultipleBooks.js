const BookModel = require('../../models/Book');
const {Op} = require('sequelize');

const deleteBookById = async (bookIds) => {
    return await BookModel.destroy({
        where : {
            id: {
                [Op.in] : bookIds
            }
        }
    })
}

module.exports = deleteBookById;