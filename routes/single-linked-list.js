"use strict";

var SingleList = require("../services/single-linked-list");
var Node = require("../services/node");
function addRoutes(router) {
  router.get('/singlelist/add/:value', function (req, res, next) {
    let singleList = new SingleList();
    let value = req.params.value || req.query.value;
    singleList.add(value);
    res.status(200).send(singleList);
  });

  router.get('/singlelist/reverse', function (req, res, next) {
    let singleList = SingleList.CreateList();
    let reversedList = singleList.reverse();
    res.status(200).send({ "Initial: ": singleList, "Final: ": reversedList });
  });

  router.get('/singlelist/findfromtail/:position', function (req, res, next) {
    let singleList = SingleList.CreateList();
    let position = req.params.position || req.query.position;
    let node = singleList.findFromTail(position);
    res.status(200).send({ "List: ": singleList, [position + "Node: "]: node });
  });
}
module.exports = {
  addRoutes
}