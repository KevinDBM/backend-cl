const AuthorModel = require('../../models/Author')

const getAuthorById = async (authorId) => {
    return await AuthorModel.findByPk(authorId)
}

module.exports = getAuthorById