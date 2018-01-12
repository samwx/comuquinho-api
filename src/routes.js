import { Router } from 'express';
const fs = require('fs');

const routes = Router();

/**
 * GET home
 */
routes.get('/', (req, res) => {
  res.json({
    response: 'Comuquinho-api'
  });
});

/**
 * GET winner
 */
routes.get('/winner', (req, res) => {

  const database = 'src/mock.json';


  fs.readFile(database, (err, content) => {
    if (err) throw err;
    const { names } = JSON.parse(content);

    var ganhador = Math.floor((Math.random()*names.length)+1);
    res.json({
      response: names[ganhador]['name']
    });
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

export default routes;
