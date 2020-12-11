const BookModel = require('../../models/Book');
const AuthorModel  = require('../../models/Author');
const {Op} = require('sequelize');

const productFinderDAO = async(term) => {
    const searchTerm = `%${term}%`
    return await BookModel.findAll({
        include : [AuthorModel],
        where : {
            [Op.or] : [
                {
                    [`$${BookModel.name}.title$`] : {
                        [Op.iLike] : searchTerm
                    }
                },
                {
                    [`$${BookModel.name}.description$`] : {
                        [Op.iLike] : searchTerm
                    },
                },
                {
                    [`$${BookModel.name}.isbn$`] : {
                        [Op.iLike] : searchTerm
                    }
                },
                {
                    [`$${AuthorModel.name}.name$`] : {
                        [Op.iLike] : searchTerm
                    }
                }
            ]
        },
        order : [['id','DESC']]
    })
}

module.exports = productFinderDAO;