const BookModel = require('../../models/Book');
const AuthorModel  = require('../../models/Author');
const UserModel = require('../../models/User');
const {Op,literal,col,fn} = require('sequelize');

const productFinderDAO = async(term,limit=10,offset=0,completed=false,ownerExcluded=false) => {
    const searchTerm = `concat('%',unaccent('${term}'),'%')`
    let options = {
        include : [AuthorModel],
        where : literal(`
            unaccent("${BookModel.name}"."title") ilike ${searchTerm}
            or
            unaccent("${BookModel.name}"."description") ilike ${searchTerm}
            or
            unaccent("${BookModel.name}"."isbn") ilike ${searchTerm}
            or
            unaccent("${AuthorModel.name}"."name") ilike ${searchTerm}
        `),
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
        options.where.owner = {
            [Op.ne] : ownerExcluded
        }
    }

    return await BookModel.findAndCountAll(options);
}

module.exports = productFinderDAO;