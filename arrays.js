var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"];
  
function addElementToBeginningOfArray(array,element) {
  [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array,element) {
 array.unshift(element);
 return array
}

function addElementToEndOfArray(array,element) {
  [...array, element];
  return array
}

function destructivelyAddElementToEndOfArray(array,element) {
  return array.push(element);
}

function accessElementInArray (array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array
}

function removeElementFromBeginningOfArray(array) {
 array.slice(1)
 return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
 return array.slice(0, array.length - 1)
}
