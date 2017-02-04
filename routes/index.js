const express = require('express');
const router = express.Router();
const SingleList = require('./single-linked-list');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

SingleList.addRoutes(router);
module.exports = router;
