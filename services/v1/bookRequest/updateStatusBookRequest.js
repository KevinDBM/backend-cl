const updateStatusBookRequestDAO = require('../../../DAO/bookRequest/updateStatusBookRequest');
const updateOwnerBook = require('../../../DAO/book/updateOwnerBook');
const {bookRequestStatusEnum} = require('../../../utils/enums');

const updateStatusBookRequest = async (req,res) => {
    try{
        const {bookRequestId} = req.params;
        const {status} = req.body;

        const resultUpdated = await updateStatusBookRequestDAO(bookRequestId,bookRequestStatusEnum[status].code)
        
        if(!resultUpdated || !resultUpdated[0]){
            return res.status(500).json({
                success : false,
                message : 'Ha ocurrido un error actualizando el estado de la solicitud de libro.'
            })
        }
        
        if(status === bookRequestStatusEnum.Aprobada.name){
            const updateBook = await updateOwnerBook(resultUpdated[1][0].requested_book,resultUpdated[1][0].requesting_user)

            if(!updateBook || !resultUpdated[0]){
                updateStatusBookRequestDAO(bookRequestId,bookRequestStatusEnum.Pendiente.code)
                .catch(error => {
                    console.error('error returning before status',error)
                })
                return res.status(500).json({
                    success : false,
                    message : 'Ha ocurrido un error actualizando el estado de la solicitud de libro.'
                })
            }
        }
        

        return res.status(200).json({
            success : true,
            message : 'Solicitud de libro actualizada con éxito',
            bookRequestId,
            newStatus : bookRequestStatusEnum[status].name
        })
    }
    catch(error){
        console.error('Ha ocurrido un error actualizando el estado de la solicitud de libro.',error)
        return res.status(500).json({
            success : false,
            message : 'Ha ocurrido un error actualizando el estado de la solicitud de libro.'
        })
    }
}

module.exports = updateStatusBookRequest;