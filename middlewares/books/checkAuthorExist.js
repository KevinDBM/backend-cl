const getAuthorById = require('../../DAO/author/getAuthorById');

const noRequired = async(req,res,next) => {
    const {author} = req.body;
    if(!author) return next();

    return await validateAuthor(author,res,next)
}
const required = async(req,res,next) => {
    const {author} = req.body;
    return await validateAuthor(author,res,next);
}

const validateAuthor = async (author,res,next) => {
    const authorExist = await getAuthorById(author);

    if(!authorExist){
        return res.status(400).json({
            success : false,
            message : 'El autor enviado no existe'
        })
    }

    return next();
}
 
module.exports = {
    required,
    noRequired
}