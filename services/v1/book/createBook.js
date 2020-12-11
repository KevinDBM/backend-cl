const createBookDAO = require('../../../DAO/book/createBook');
const getCompleteBook = require('../../../DAO/book/getCompleteBookById');
const {completeBook} = require('../../../DTO/Book')

const decodedAuthorizationToken = require('../../../utils/decodedAuthorizationToken')
//
const bcrypt = require('bcryptjs');

const createBook = async (req,res) => {
    try{
        const {title,isbn,description,author,image} = req.body;
        const currentUser = decodedAuthorizationToken(req.headers.authorization);
        
        const resultCreated = await createBookDAO(title,isbn,description,author,image,currentUser.id)

        if(!resultCreated){
            return res.status(500).json({
                success : false,
                message : 'Ha ocurrido un error creando el libro.'
            })
        }

        const newBook = await getCompleteBook(resultCreated.id);

        return res.status(201).json({
            success : true,
            message : 'Libro creado con éxito',
            book : completeBook(newBook)
        })

    }
    catch(error){
        console.error('Ha ocurrido un error creando el libro.',error)
        return res.status(500).json({
            success : false,
            message : 'Ha ocurrido un error creando el libro.'
        })
    }
    
}

module.exports = createBook