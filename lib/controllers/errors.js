const { Router } = require('express');

module.exports = Router()
  .get('/teapot', (req, res, next) => {
    next({ status: 418 });
  })
  .get('/payment', (req, res, next) => {
    next({ status: 402 });
  })
  .get('/forgot to branch', (req, res, next) => {
    next({ status: 'dingus' });
  });
