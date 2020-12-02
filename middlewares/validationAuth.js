const { body } = require('express-validator');

const validateCreateToken = () => {
    return [
    body('email')
        .exists()
        .withMessage('El correo electrónico es requerido.')
        .trim()
        .not()
        .isEmpty()
        .withMessage('El correo electrónico no puede estar vacío')
        .isEmail()
        .withMessage('En el campo email debe ir un correo electrónico'),
    body('password')
        .exists()
        .withMessage('La contraseña es requerida.')
        .trim()
        .not()
        .isEmpty()
        .withMessage('La contraseña no puede estar vacía')
    ];
  };
  
  module.exports = {
    validateCreateToken
  };