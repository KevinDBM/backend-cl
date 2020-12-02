module.exports = {
    user : (userModel) => {
        return Object.freeze({
            id : userModel.id,
            name : userModel.name,
            email : userModel.email
        })
    }
}