const { body } = require('express-validator');

const validateCreateBook = () => {
    return [
      body('title')
        .exists()
        .withMessage('El título es requerido.')
        .trim()
        .not()
        .isEmpty().withMessage('El título no puede estar vacío'),
    body('isbn')
        .exists()
        .withMessage('El ISBN es requerido.')
        .trim()
        .isLength({min:1,max:13}).withMessage('El ISBN no puede estar vacío, ni contener más de 13 caracteres'),
    body('description')
        .optional()
        .trim()
        .not()
        .isEmpty().withMessage('La descripción no puede estar vacía'),
    body('author')
        .exists()
        .withMessage('El Autor es requerido.')
        .trim()
        .isInt({min:1})
        .withMessage('El Autor debe ser un número entero mayor a 0')
    ];
  };
  
  module.exports = {
    validateCreateBook
  };