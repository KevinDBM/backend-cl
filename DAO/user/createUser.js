const UserModel = require('../../models/User')

const createUser = async(name,email,password) => {
    return await UserModel.create({
        name,email,password
    })
}

module.exports = createUser