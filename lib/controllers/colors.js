const { Router } = require('express');
const blue = require('../middleware/blue');
const red = require('../middleware/red');
const yellow = require('../middleware/yellow');
// const colors = require('../middleware/colors');

// what middleware does this route need to pass?
module.exports = Router()
  .get('/purple', [red, blue], (req, res, next) => {
    try {
      res.json(req.colors);
    } catch (e) {
      next(e);
    }
  })
  .get('/orange', [yellow, red], (req, res, next) => {
    try {
      res.json(req.colors);
    } catch (e) {
      next(e);
    }
  })
  .get('/green', [blue, yellow], (req, res, next) => {
    try {
      res.json(req.colors);
    } catch (e) {
      next(e);
    }
  });
