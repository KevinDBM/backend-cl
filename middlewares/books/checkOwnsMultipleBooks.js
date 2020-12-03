const noOwnBooks = require('../../DAO/book/getBooksNoOwns');
const getBookByIds = require('../../DAO/book/getBookByIds')
const decodedAuthorizationToken = require('../../utils/decodedAuthorizationToken');

const checkOwnsBook = async (req,res,next) => {
    const {id} = decodedAuthorizationToken(req.headers.authorization);
    const {books} = req.body;

    const booksDB = await getBookByIds(books);

    if(!booksDB.length){
        return response(res)
    }

    const booksNoOwn = await noOwnBooks(books,id);

    if(booksNoOwn.length){
        return response(res)
    }

    return next();
}

const response = (res) => res.status(401).json({
    success : false,
    message : 'No puede manipular estos libros'
})

module.exports = checkOwnsBook

