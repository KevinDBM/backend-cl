const { body } = require('express-validator');

const validateCreateUser = () => {
    return [
      body('name')
        .exists()
        .withMessage('El nombre es requerido.')
        .trim()
        .isLength({min:1}).withMessage('El nombre no puede estar vacío'),
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
    validateCreateUser
  };