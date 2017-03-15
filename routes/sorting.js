"use strict";

const sort = require('../services/sorting');
function addRoutes(router) {
  router.post('/sorting/bubblesort', function (req, res, next) {
    let array = req.body;
    let sortedArray = sort.bubbleSort(array);
    res.status(200).send(array);
  });

  router.post('/sorting/selectsort', function (req, res, next) {
    let array = req.body;
    let sortedArray = sort.selectSort(array);
    res.status(200).send(sortedArray);
  });

  router.post('/sorting/insertionsort', function (req, res, next) {
    let array = req.body;
    let sortedArray = sort.insertionSort(array);
    res.status(200).send(array);
  });

  router.post('/sorting/mergesort', function (req, res, next) {
    let array = req.body;
    let sortedArray = sort.mergeSort(array);
    res.status(200).send(sortedArray);
  });

  router.post('/sorting/quicksort', function (req, res, next) {
    let array = req.body;
    let sortedArray = sort.quickSort(array);
    res.status(200).send(sortedArray);
  });
}

function processData(input) {
  // Create an empty stack. The stack holds indexes of hist[] array
  // The bars stored in stack are always in increasing order of their
  // heights.
  let s = [];

  let max_area = 0; // Initalize max area
  let tp;  // To store top of stack
  let area_with_top; // To store area with top bar as the smallest bar
  let hist = input.split('\n');
  let n = hist.shift();
  hist = hist[0].split(' ').map(Number);

  // Run through all bars of given histogram
  let i = 0;
  while (i < n) {
    // If this bar is higher than the bar on top stack, push it to stack
    if (s.length === 0 || hist[s[s.length - 1]] <= hist[i])
      s.push(i++);

    // If this bar is lower than top of stack, then calculate area of rectangle
    // with stack top as the smallest (or minimum height) bar. 'i' is
    // 'right index' for the top and element before top in stack is 'left index'
    else {
      tp = s[s.length - 1];  // store the top index
      s.pop();  // pop the top

      // Calculate the area with hist[tp] stack as smallest bar
      area_with_top = hist[tp] * (s.length === 0 ? i : i - s[s.length - 1] - 1);

      // update max area, if needed
      if (max_area < area_with_top)
        max_area = area_with_top;
    }
  }

  // Now pop the remaining bars from stack and calculate area with every
  // popped bar as the smallest bar
  while (s.length > 0) {
    tp = s[s.length - 1];
    s.pop();
    area_with_top = hist[tp] * (s.length === 0 ? i : i - s[s.length - 1] - 1);

    if (max_area < area_with_top)
      max_area = area_with_top;
  }

  console.log(max_area);
}
module.exports = {
  addRoutes
}