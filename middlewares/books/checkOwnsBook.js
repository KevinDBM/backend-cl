const ownsBook = require('../../utils/ownsBook');
const decodedAuthorizationToken = require('../../utils/decodedAuthorizationToken');

const checkOwnsBook = async (req,res,next) => {
    const {id} = decodedAuthorizationToken(req.headers.authorization);
    const {bookId} = req.params;

    const infoBook = await ownsBook(bookId,id);

    if(!infoBook){
        return res.status(401).json({
            success : false,
            message : 'No puede manipular este libro'
        })
    }

    return next();
}

module.exports = checkOwnsBook

