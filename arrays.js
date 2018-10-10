var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"];
  
function addElementToBeginningOfArray(array,elementToAdd) {
  return [elementToAdd, ...array];
}

function destructivelyAddElementToBeginningOfArray(array,elementToAdd) {
 return array.push(elementToAdd);
}

function addElementToEndOfArray(array,elementToAdd) {
  return [...array, elementToAdd];
}

function destructivelyAddElementToEndOfArray(array,elementToAdd) {
  return array.unshift(elementToAdd);
}

function accessElementInArray (array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift();
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}