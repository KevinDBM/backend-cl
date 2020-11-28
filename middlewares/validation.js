const { body, param } = require('express-validator/check');

const validateClientRegister = () => {
  return [
    body('documentType')
      .exists()
      .withMessage('El tipo de documento es requerido.')
      .isNumeric()
      .withMessage('El tipo de documento debe ser un dato númerico.')
  ];
};

module.exports = {
  validateClientRegister
};
