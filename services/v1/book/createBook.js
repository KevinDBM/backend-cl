const getAuthorById = require('../../../DAO/author/getAuthorById');
const createBookDAO = require('../../../DAO/book/createBook');
const getCompleteBook = require('../../../DAO/book/getCompleteBookById');
const {completeBook} = require('../../../DTO/Book')

const decodedAuthorizationToken = require('../../../utils/decodedAuthorizationToken')
//
const bcrypt = require('bcryptjs');

const createUser = async (req,res) => {
    try{
        const {title,isbn,description,author} = req.body;
        const currentUser = decodedAuthorizationToken(req.headers.authorization);
        const authorExist = await getAuthorById(author);

        if(!authorExist){
            return res.status(400).json({
                success : false,
                message : 'El autor enviado no existe'
            })
        }
        
        const resultCreated = await createBookDAO(title,isbn,description,author,currentUser.id)

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

const createPassword = (password) => {
    return bcrypt.hashSync(password,10)
}

module.exports = createUser