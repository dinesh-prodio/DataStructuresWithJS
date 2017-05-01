"use strict";

function processData(input) {
  //Enter your code here
  const inputasArray = input.split('\n');
  const inputSize = inputasArray.shift();
  const inputElements = [];
  for (let i = 0; i < inputSize; i++) {
    inputElements.push(inputasArray.shift());
  }
  const querySize = inputasArray.shift();
  const result = [];
  for (let i = 0; i < querySize; i++) {
    let query = inputasArray.shift();
    let count = 0;
    inputElements.reduce(function (accumulator, currentValue, currentIndex, array) {
      if (currentValue == query) {
        count++;
      }
    }, 0);
    result.push(count);
  }
  result.map(x => console.log(x));
}