const updateStatusBookRequestDAO = require('../../../DAO/bookRequest/updateStatusBookRequest');
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