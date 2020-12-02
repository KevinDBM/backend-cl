const { validationResult } = require('express-validator');

const checkErrors = (req, res, next) => {
  const errors = validationResult(req);
  let controlErrors = {}

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Errores en los parametros enviados',
      errors: errors.array().filter(error => {
        if(!controlErrors[error.param]){
            controlErrors[error.param] = 1;
            return true;
        }
        return false;
      }).map(error => {  
        return { param: error.param, message: error.msg };   
      })
    });
  }

  next();
};

module.exports = checkErrors;
