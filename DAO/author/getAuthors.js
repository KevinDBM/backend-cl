const AuthorModel = require('../../models/Author');

const getAuthors = async () => {

    return await AuthorModel.findAll()
}

module.exports = getAuthors;