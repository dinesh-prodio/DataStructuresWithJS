"use strict";

const sort = require('../services/sorting');
function addRoutes(router) {
  router.post('/sorting/bubblesort', function (req, res, next) {
    let array = req.body;
    let sortedArray = sort.bubbleSort(array);
    res.status(200).send(array);
  });
}
module.exports = {
  addRoutes
}