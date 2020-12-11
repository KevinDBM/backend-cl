const ownsBookRequest = require('../../utils/ownsBookRequest');
const decodedAuthorizationToken = require('../../utils/decodedAuthorizationToken');

const checkOwnBookRequest = async(req,res,next) => {
    try{
        const {id} = decodedAuthorizationToken(req.headers.authorization);
        const {bookRequestId} = req.params;
        const resultValidation = await ownsBookRequest(id,bookRequestId);

        if(!resultValidation){
            return res.status(400).json({
                success : false,
                message : 'No puede modificar esta solicitud'
            })
        }

        next();
    }
    catch(error){
        console.error('Ha ocurrido un error inesperado',error)
        return res.status(500).json({
            success : false,
            message : 'Ha ocurrido un error inesperado'
        })
    }
}

module.exports = checkOwnBookRequest;