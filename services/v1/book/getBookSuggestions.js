const productFinderDAO = require('../../../DAO/book/bookFinder');
const {bookSuggestions} = require('../../../DTO/Book');

const getBookSugestions = async (req,res) => {
    try{
        const {term} = req.query;
        const books = await productFinderDAO(term);

        if(!books.length){
            return res.status(404).json({
                success : false,
                message : 'No hay sugerencias que mostrar'
            })
        }

        return res.status(200).json({
            success : true,
            suggestions : bookSuggestions(books)
        })
    }
    catch(error){
        return res.status(500).json({
            success : false,
            message : 'Ha ocurrido un error consultando las sugerencias para los libros'
        })
    }
}

module.exports = getBookSugestions;