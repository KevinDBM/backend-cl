const getAuthorsDAO = require('../../../DAO/author/getAuthors');
const {Authors} = require('../../../DTO/Author')

const getAuthors = async(req,res) => {
    try{
        const allAuthors = await getAuthorsDAO();

        if(!allAuthors.length){
            return res.status(404).json({
                success : false,
                message : 'No hay autores que mostrar'
            })
        }

        return res.status(200).json({
            success : true,
            message : 'Lista de autores disponibles',
            authors : Authors(allAuthors)
        })
    }
    catch(error){
        console.error('Ha ocurrido un error listando los autores.',error)
        return res.status(500).json({
            success : false,
            message : 'Ha ocurrido un error listando los autores.'
        })
    }
}

module.exports = getAuthors;