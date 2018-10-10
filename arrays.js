var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"];
  
function addElementToBeginningOfArray(array,element) {
  return [elementToAdd, ...array];
}

function destructivelyAddElementToBeginningOfArray(array,element) {
 return array.push(elementToAdd);
}

function addElementToEndOfArray(array,element) {
  return [...array, elementToAdd];
}

function destructivelyAddElementToEndOfArray(array,element) {
  return array.unshift(elementToAdd);
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
