var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"];
  
function addElementToBeginningOfArray(array,elementToAdd) {
  return [elementToAdd, ...array];
}

function destructivelyAddElementToBeginningOfArray(array,elementToAdd) {
  return array = [elementToAdd,...array];
}