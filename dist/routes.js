'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

const routes = (0, _express.Router)();

/**
 * GET home
 */
routes.get('/', () => {
  console.log('teste'); // eslint-disable-line no-console
  // res.json({
  //   response: 'Comuquinho api'
  // });
});

/**
 * GET winner
 */
routes.get('/winner', (req, res) => {
  res.json({
    response: 'Ganhador'
  });
});

/**
 * POST addToList
 */
routes.get('/add-to-list', (req, res) => {
  res.json({
    response: 'Adiciona usuário a lista'
  });
});

/**
 * GET /list
 *
 * This is a sample route demonstrating
 * a simple approach to error handling and testing
 * the global error handler. You most certainly want to
 * create different/better error handlers depending on
 * your use case.
 */
routes.get('/list', (req, res, next) => {
  const { title } = req.query;

  if (title == null || title === '') {
    // You probably want to set the response HTTP status to 400 Bad Request
    // or 422 Unprocessable Entity instead of the default 500 of
    // the global error handler (e.g check out https://github.com/kbariotis/throw.js).
    // This is just for demo purposes.
    next(new Error('The "title" parameter is required'));
    return;
  }

  res.render('index', { title });
});

exports.default = routes;
//# sourceMappingURL=routes.js.map