const updateBookDAO = require('../../../DAO/book/updateBook');
const getCompleteBook = require('../../../DAO/book/getCompleteBookById');
const {completeBook} = require('../../../DTO/Book')

const updateBook = async (req,res) => {
    try{
        const {bookId} = req.params;
        const {title,isbn,description,author} = req.body;
        let fieldsUpdate = {};

        if(title) fieldsUpdate.title = title;
        if(isbn) fieldsUpdate.isbn = isbn;
        if(description) fieldsUpdate.description = description;
        if(author) fieldsUpdate.author = author;

        if(!Object.keys(fieldsUpdate).length){
            return res.status(400).json({
                success : false,
                message : 'Debe enviar al menos un parametro para actualizar'
            })
        }

        const resultUpdated = await updateBookDAO(bookId,fieldsUpdate)

        if(!resultUpdated || !resultUpdated[0]){
            return res.status(500).json({
                success : false,
                message : 'Ha ocurrido un error actualizando el libro.'
            })
        }

        const newBookInfo = await getCompleteBook(bookId);

        return res.status(200).json({
            success : true,
            message : 'Libro actualizado con éxito',
            book : completeBook(newBookInfo)
        })

    }
    catch(error){
        console.error('Ha ocurrido un error actualizando el libro.',error)
        return res.status(500).json({
            success : false,
            message : 'Ha ocurrido un error actualizando el libro.'
        })
    }
    
}

module.exports = updateBook