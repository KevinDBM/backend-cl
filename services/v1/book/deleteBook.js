const deleteBookDAO = require('../../../DAO/book/deleteBookById');
const getCompleteBook = require('../../../DAO/book/getCompleteBookById');
const {completeBook} = require('../../../DTO/Book')

const deleteBook = async (req,res) => {
    try{
        const {bookId} = req.params;
        await deleteBookDAO(bookId);

        return res.status(200).json({
            success : true,
            message : 'Libro borrado con éxito'
        })

    }
    catch(error){
        console.error('Ha ocurrido un error borrando el libro.',error)
        return res.status(500).json({
            success : false,
            message : 'Ha ocurrido un error borrando el libro.'
        })
    }
    
}

module.exports = deleteBook