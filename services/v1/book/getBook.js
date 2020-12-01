const getBookDAO = require('../../../DAO/book/getCompleteBookById');
const {completeBook} = require('../../../DTO/Book')

const getBook = async(req,res) => {
    try{
        const {bookId} = req.params;

        const bookDB = await getBookDAO(bookId);

        if(!bookDB){
            return res.status(404).json({
                success : false,
                message : 'Este libro no existe'
            })
        }

        return res.status(200).json({
            success : true,
            message : 'Libro consultado',
            book : completeBook(bookDB),
        })
    }
    catch(error){
        console.error('Ha ocurrido un error consultando el libro.',error)
        return res.status(500).json({
            success : false,
            message : 'Ha ocurrido un error consultando el libro.'
        })
    }
}

module.exports = getBook;