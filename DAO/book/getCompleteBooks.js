const BookModel = require('../../models/Book');
const AuthorModel = require('../../models/Author');
const UserModel = require('../../models/User');

const getBooks = async (limit,offset,owner=null) => {
    let where;
    if(owner){
        where = {owner}
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