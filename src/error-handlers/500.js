'use strict'

const logger = require('../middleware/logger.js');

module.exports = function (err, req, res, next) {

    const error = err.message ? err.message : err;
    const errorObject = {
      status: 500,
      message: error,
    }
  
    response.status(errorObject.status).json(errorObject);
  }
  