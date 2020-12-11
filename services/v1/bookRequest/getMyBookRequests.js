const getMyCompleteBookRequests = require('../../../DAO/bookRequest/getMyCompleteBookRequests');
const decodedAuthorizationToken = require('../../../utils/decodedAuthorizationToken');
const {completeBookRequests} = require('../../../DTO/BookRequest')

const getMyBookRequests = async (req,res) => {
    try{
        const {id} = decodedAuthorizationToken(req.headers.authorization);
        let {currentPage,perPage} = req.query;

        currentPage = currentPage || 1;
        perPage = perPage || 10;    
        const offset = (currentPage - 1) * perPage

        const {count,rows} = await getMyCompleteBookRequests(id,perPage,offset);

        if(!count){
            return res.status(404).json({
                success : false,
                message : 'No hay solicitudes de libros que mostrar'
            })
        }

        return res.status(200).json({
            success : true,
            bookRequests : completeBookRequests(rows),
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
        console.error('Ha ocurrido un error consultando las solicitudes de libros',error)
        return res.status(500).json({
            success : false,
            message : 'Ha ocurrido un error consultando las solicitudes de libros'
        })
    }
}

module.exports = getMyBookRequests;