const decodedAuthorizationToken = require('../utils/decodedAuthorizationToken')

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (token === 'null' || !token) {
      return res.status(401).json({
          success:false,
        message: 'Debe autenticarse para realizar esta acción'
      });
    }
    
    if(!decodedAuthorizationToken(token)){
        return res.status(401).json({
            success:false,
            message: 'Debe autenticarse para realizar esta acción'
          });
    }
    next();
  } catch (error) {
    return res.status(401).json({
        success:false,
      message: 'Debe autenticarse para realizar esta acción'
    });
  }
};
