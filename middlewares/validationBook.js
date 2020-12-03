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
        .isLength({min:1,max:500})
        .withMessage('La descripción no puede estar vacía ni contener más de 500 caracteres'),
    body('author')
        .exists()
        .withMessage('El Autor es requerido.')
        .trim()
        .isInt({min:1})
        .withMessage('El Autor debe ser un número entero mayor a 0'),
    body('image')
        .exists()
        .withMessage('La imagen es requerida.')
        .trim()
        .isURL()
        .withMessage('La imagen debe ser una url')
    ];
  };

const validateUpdateBook = () => {
  return [
    body('title')
      .optional()
      .trim()
      .not()
      .isEmpty().withMessage('El título no puede estar vacío'),
  body('isbn')
      .optional()
      .trim()
      .isLength({min:1,max:13}).withMessage('El ISBN no puede estar vacío, ni contener más de 13 caracteres'),
  body('description')
      .optional()
      .trim()
      .isLength({min:1,max:500})
      .withMessage('La descripción no puede estar vacía ni contener más de 500 caracteres'),
  body('author')
      .optional()
      .trim()
      .isInt({min:1})
      .withMessage('El Autor debe ser un número entero mayor a 0'),
  body('image')
      .optional()
      .trim()
      .isURL()
      .withMessage('La imagen debe ser una url')
  ];
};

const validateDeleteBooks = () => {
  return [
    body('books')
      .exists()
      .withMessage('Los ids de los libros son requeridos.')
      .isArray()
      .withMessage('Debe enviar un array con los ids de los libros a eliminar')
      .not()
      .isEmpty()
      .withMessage('Debe enviar al menos un id de libro')
  ];
};
  
  module.exports = {
    validateCreateBook,
    validateUpdateBook,
    validateDeleteBooks
  };