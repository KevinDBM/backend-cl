const BookModel = require('../../models/Book');
const AuthorModel = require('../../models/Author');
const UserModel = require('../../models/User');
const {Op} = require('sequelize')
const getBooks = async (limit,offset,owner=null,ownerExcluded=false) => {
    let where;
    if(owner){
        where = {owner}
    }

    if(ownerExcluded){
        if(!where) where = {};
        where.owner = {
            [Op.ne] : ownerExcluded
        }
    }

    return await BookModel.findAndCountAll({
        where,
        include : [AuthorModel,{
            model : UserModel,
            as : 'Owner'
        }],
        limit,
        offset,
        order:[['id','DESC']]
    })
}

module.exports = getBooks;