const singleUser = (userModel) => {
    return Object.freeze({
        id : userModel.id,
        name : userModel.name
    })
}
const user = (userModel) => {
    return Object.freeze({
        ...singleUser(userModel),
        email : userModel.email
    })
}

module.exports = {
    user,
    singleUser
}