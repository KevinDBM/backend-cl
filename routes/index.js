const apiRoute = require('./api');

const init = app => {
  app.get('*', function(req, res, next) {
    //console.log('Request was made to: ' + req.originalUrl);
    return next();
  });
  app.use('/api', apiRoute);
};

module.exports = {
  init: init
};
