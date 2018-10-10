var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"];
  
function addElementToBeginningOfArray(array,elementToAdd) {
  return [elementToAdd, ...array];
}

function destructivelyAddElementToBeginningOfArray(array,elementToAdd) {
 var array = [elementToAdd,...array];
}

function addElementToEndOfArray(array,elementToAdd) {
  return [...array, elementToAdd];
}

function destructivelyAddElementToEndOfArray(array,elementToAdd) {
  return array = [...array, elementToAdd];
}