const ownsBook = require('../../../utils/ownsBook');
const createBookRequestDAO = require('../../../DAO/bookRequest/createBookRequest');
const getCompleteBookRequest = require('../../../DAO/bookRequest/getCompleteBookRequest');
const {completeBookRequest} = require('../../../DTO/BookRequest')
const getRequestByUserAndBookRequest = require('../../../DAO/bookRequest/getRequestByUserAndBookRequest');

const decodedAuthorizationToken = require('../../../utils/decodedAuthorizationToken')

const createBookRequest = async (req,res) => {
    try{
        const {id} = decodedAuthorizationToken(req.headers.authorization);
        const {requestedBook,bookToBarter,priceOffered} = req.body;
        
        const notIsOwnBook = await ownsBook(requestedBook,id);

        if(notIsOwnBook){
            return res.status(400).json({
                success : false,
                message : 'No puede solicitar este libro'
            })
        }

        if(bookToBarter){
            const isOwnBook = await ownsBook(bookToBarter,id);
            if(!isOwnBook){
                return res.status(400).json({
                    success : false,
                    message : 'No puede ofrecer este libro'
                })
            }
        }
        
        const requestForBook = await getRequestByUserAndBookRequest(id,requestedBook);
        
        if(requestForBook.length){
            return res.status(400).json({
                success : false,
                message : 'No puede solicitar dos veces el mismo libro'
            })
        }

        const resultCreated = await createBookRequestDAO(id,requestedBook,bookToBarter,priceOffered);

        if(!resultCreated){
            return res.status(500).json({
                success : false,
                message : 'Ha ocurrido un error creando la solicitud de libro.'
            })
        }

        const newBookRequest = await getCompleteBookRequest(resultCreated.id);


        return res.status(201).json({
            success : true,
            bookRequest : completeBookRequest(newBookRequest)
        })
    }
    catch(error){
        console.error('Ha ocurrido un error creando el libro.',error)
        return res.status(500).json({
            success : false,
            message : 'Ha ocurrido un error creando la solicitud de libro.'
        })
    }    
}

module.exports = createBookRequest