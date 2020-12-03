const deleteBooksDAO = require('../../../DAO/book/deleteMultipleBooks');
const {completeBook} = require('../../../DTO/Book')

const deleteBook = async (req,res) => {
    try{
        const {books} = req.body;
        await deleteBooksDAO(books);

        return res.status(200).json({
            success : true,
            message : 'Libros borrados con éxito'
        })

    }
    catch(error){
        console.error('Ha ocurrido un error borrando los libros.',error)
        return res.status(500).json({
            success : false,
            message : 'Ha ocurrido un error borrando los libros.'
        })
    }
    
}

module.exports = deleteBook