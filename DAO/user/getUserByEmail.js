const UserModel = require('../../models/User')

const getUserByEmail = async (email) => {
    return await UserModel.findOne({
        where : {
            email
        }
    })
}

module.exports = getUserByEmail