const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const database = require('./database');
const {check: expressValidator} = require('express-validator');
const cors = require('cors');

module.exports = () => {
  let app = express();

  let create;

  let start;

  create = () => {
    // Routes which should handle requests
    let routes = require('../routes');

    // set all the server things
    app.set('env', process.env.NODE_ENV);
    app.set(
      'port',
      process.env.NODE_PORT !== undefined ? process.env.NODE_PORT : 9250
    );
    app.set(
      'hostname',
      process.env.HOSTNAME !== undefined ? process.env.HOSTNAME : 'localhost'
    );
    app.use(cors());
    app.use(morgan('dev'));
    app.use(bodyParser.json());
    app.use(expressValidator());
    app.use(bodyParser.urlencoded({ extended: false }));

    //conect with postgresql
    database
    .authenticate()
    .then(() => {
      console.log('Postgresql Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the postgresql database:', err);
    });
    
    routes.init(app);

    // CORS errors control
    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
      );
      if (req.method === 'OPTIONS') {
        res.header(
          'Access-Control-Allow-Methods',
          'PUT, POST, PATCH, DELETE, GET'
        );
        return res.status(200).json({});
      }
      next();
    });

    app.use((req, res, next) => {
      res.status(404).json({
        success :false,
        message : 'Route not found'
      })
    });

    app.use((error, req, res, next) => {
      res.status(error.status || 500).json({
        success :false,
        message : error.message
      })
    });

    return app;
  };

  start = () => {
    let hostname = app.get('hostname');

    let port = app.get('port');
    app.listen(port, () => {
      //console.log(`Express server listening on - http://${hostname}:${port}`);
    });

    return app;
  };

  return {
    create: create,
    start: start
  };
};
