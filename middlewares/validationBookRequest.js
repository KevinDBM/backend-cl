const { body, oneOf,check } = require('express-validator');

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


  module.exports = {
    validateCreateBookRequest,
    validateCreateBookRequest2
  }