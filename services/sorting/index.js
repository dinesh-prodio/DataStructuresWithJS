"use strict";

function bubbleSort(arrayToSort) {

  let sorted = false;
  for (let pass = arrayToSort.length - 1; pass >= 0 && !sorted; pass--) {
    sorted = true;
    for (let i = 0; i <= pass - 1; i++) {
      if (arrayToSort[i] > arrayToSort[i + 1]) {
        [arrayToSort[i], arrayToSort[i + 1]] = [arrayToSort[i + 1], arrayToSort[i]]
        sorted = false;
      }
    }
  }
  return arrayToSort;
}

module.exports = {
  bubbleSort
}