const getBooksDAO = require('../../../DAO/book/getCompleteBooks');
const decodedAuthorizationToken = require('../../../utils/decodedAuthorizationToken');
const {completeBooks} = require('../../../DTO/Book')

const getBooks = async(req,res) => {
    try{
        let {own,currentPage,perPage} = req.query;

        let currentUser = {};
        if(typeof own !== undefined) currentUser=decodedAuthorizationToken(req.headers.authorization)

        currentPage = currentPage || 1;
        perPage = perPage || 10;    
        const offset = (currentPage - 1) * perPage

        const {count,rows} = await getBooksDAO(perPage,offset,currentUser.id);

        if(!count){
            return res.status(404).json({
                success : false,
                message : 'No hay libros que mostrar'
            })
        }

        return res.status(200).json({
            success : true,
            message : 'Lista de libros disponibles',
            books : completeBooks(rows),
            pagination: {
                totalFoundItems: count,
                pages: Math.ceil(count / perPage),
                fromItem: offset + 1,
                currentPage,
                perPage
              }
        })
    }
    catch(error){
        console.error('Ha ocurrido un error listando los libros.',error)
        return res.status(500).json({
            success : false,
            message : 'Ha ocurrido un error listando los libros.'
        })
    }
}

module.exports = getBooks;