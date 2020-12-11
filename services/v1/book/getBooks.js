const getBooksDAO = require('../../../DAO/book/getCompleteBooks');
const bookFinder = require('../../../DAO/book/bookFinder');
const decodedAuthorizationToken = require('../../../utils/decodedAuthorizationToken');
const {completeBooks} = require('../../../DTO/Book')

const getBooks = async(req,res) => {
    try{
        let {own,currentPage,perPage,term} = req.query;
        let currentUser=decodedAuthorizationToken(req.headers.authorization)

        currentPage = currentPage || 1;
        perPage = perPage || 10;    
        const offset = (currentPage - 1) * perPage

        let result = {};
        if(term){
            result = await bookFinder(term,perPage,offset,true,currentUser.id);
        }
        else if(typeof own !== 'undefined'){
           result = await  getBooksDAO(perPage,offset,currentUser.id);
        }
        else{
            result = await  getBooksDAO(perPage,offset,false,currentUser.id);
        }

        let count = result.count,
            rows = result.rows;

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