const { body, oneOf,check } = require('express-validator');
const {bookRequestStatusEnum} = require('../utils/enums')

const validateCreateBookRequest = () =>{
  return [
    body('requestedBook')
    .exists()
    .withMessage('El libro solicitado es obligatorio.')
    .isInt({min:1})
    .withMessage('El libro solicitado debe ser un número entero mayor a uno.')
  ]
}

const validateCreateBookRequest2 = () =>{
  return oneOf(
      [
        body('bookToBarter')
        .exists()
        .isInt({min:1}),
        body('priceOffered')
        .exists()
        .isFloat()
      ],
      'Debe enviar un libro para intercambiar o un precio para ofrecer validos'    
  )
}

const validateUpdateStatus = () => {
  return [
    body('status')
    .exists()
    .withMessage('El estado es un campo obligatorio')
    .isIn(Object.values(bookRequestStatusEnum).map(status => status.name))
    .withMessage('No envió un valor valido para el estado')
  ]
}


  module.exports = {
    validateCreateBookRequest,
    validateCreateBookRequest2,
    validateUpdateStatus
  }