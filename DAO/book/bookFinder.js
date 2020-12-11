const BookModel = require('../../models/Book');
const AuthorModel  = require('../../models/Author');
const UserModel = require('../../models/User');
const {Op} = require('sequelize');

const productFinderDAO = async(term,limit=10,offset=0,completed=false,ownerExcluded=false) => {
    const searchTerm = `%${term}%`
    let options = {
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
        order : [['id','DESC']],
        limit,
        offset
    };

    if(completed){
        options.include.push({
            model : UserModel,
            as : 'Owner'
        })
    }

    if(ownerExcluded){
        options.where.owner = ownerExcluded
    }

    return await BookModel.findAndCountAll(options);
}

module.exports = productFinderDAO;