function checkForLength (arr) {
  if (Array.isArray(arr) && arr.length > 0) {
    let lengthToCheck = arr[0].length;
    for (el in arr) {
      if (arr[el].length !== lengthToCheck)
        return false;
    }
    return true;
  }
  return false;
}

function checkifEnd (arr, currentIndex) {

}
function traverseLeft (arr) {

}

function traverseRight (arr) {

}
function traverseUp (arr) {

}

function traverseDown (arr) {

}
function printCustomWay (arr) {
  if (checkForLength(arr)) {

  }
}