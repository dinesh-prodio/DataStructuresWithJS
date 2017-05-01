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

function selectSort(arrayToSort) {
    for (let i = 0; i < arrayToSort.length; i++) {
        let min = i;
        for (let j = i + 1; j < arrayToSort.length; j++) {
            if (arrayToSort[j] < arrayToSort[i]) {
                min = j;
        [arrayToSort[i], arrayToSort[min]] = [arrayToSort[min], arrayToSort[i]];
            }
        }
    }
    return arrayToSort;
}

function insertionSort(arrayToSort) {
    for (let i = 1; i < arrayToSort.length; i++) {
        let j = i;
        while (j > 0 && arrayToSort[j - 1] > arrayToSort[i]) {
      [arrayToSort[i], arrayToSort[j - 1]] = [arrayToSort[j - 1], arrayToSort[i]];
            j--;
        }
    }
    return arrayToSort;
}

function mergeSort(arrayToSort) {
    function mergeSortImplementation(arr) {
        if (arr.length < 2)
            return arr;

        let middle = parseInt(arr.length / 2);
        let left = arr.slice(0, middle);
        let right = arr.slice(middle, arr.length);

        return merge(mergeSortImplementation(left), mergeSortImplementation(right));
    }

    function merge(left, right) {
        let result = [];

        while (left.length && right.length) {
            if (left[0] <= right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }

        while (left.length)
            result.push(left.shift());

        while (right.length)
            result.push(right.shift());

        return result;
    }

    return mergeSortImplementation(arrayToSort);
}

function quickSort(arrayToSort, left = 0, right = arrayToSort.length - 1) {

    let pivot;
    if (right > left) {
        pivot = partition(arrayToSort, left, right);
        quickSort(arrayToSort, left, pivot - 1);
        quickSort(arrayToSort, pivot + 1, right);
    }

    function swap(arrayToSort, firstIndex, secondIndex) {
        let temp = arrayToSort[firstIndex];
        arrayToSort[firstIndex] = arrayToSort[secondIndex];
        arrayToSort[secondIndex] = temp;
    }

    function partition(arrayToSort, left, right) {
        var pivot = arrayToSort[left],
            i = left,
            j = right;


        while (i < j) {

            while (arrayToSort[i] <= pivot) {
                i++;
            }

            while (arrayToSort[j] > pivot) {
                j--;
            }

            if (i < j) {
                swap(arrayToSort, i, j);
            }
        }
        arrayToSort[left] = arrayToSort[j];
        arrayToSort[j] = pivot;
        return j;
    }

    return arrayToSort;
}

function getMissing(identifier) {
    let audit = require("./missing.json").timeoffAccrualAudit;
    let list = audit.map(x => {
        return x.requestId.split(identifier)[1].split('-')[0];
    });
    let res = {};
    res.processed = list.map(Number).sort((a, b) => a - b);
    let map = {};
    list.forEach(x => {
        if (map[x] && map[x].found == true) {
            map[x].count += 1
        } else {
            map[x] = {
                value: x,
                found: true,
                count: 1
            }
        }
    });

    res.duplicated = [];
    for (let el in map) {
        if (map[el].count > 1) {
            res.duplicated.push(map[el])
        }
    }

    return res;
}

module.exports = {
    bubbleSort,
    selectSort,
    insertionSort,
    mergeSort,
    quickSort,
    getMissing
}
