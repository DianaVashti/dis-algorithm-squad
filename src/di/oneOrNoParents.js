// One Or No Parents (hard)
// Specs: given a tree representing parent / child relationships:

//       1
//      / \
//     2   3
//          \
//       4   5
//      / \ /
//     6   7

// this tree could be represented as the nested array parentChildTree below:
const parentChildTree = [[1,2],[1,3],[3,5],[4,6],[4,7],[5,7]];

// Write a program that takes a nested array of parent-child relationships
// and returns only the values who have no parent & the values that have
// only 1 parent

// example output given the input parentChildTree above
// No Parents: 1, 4
// One Parent: 2, 3, 5, 6

// Your program should return one output with both these evaluations
// and your output can be in the form of any JavaScript data structure

// your code below: ------------------------------------------------------------

const oneOrNone = (array) => {
  const parents = allNestedArrayValuesAtIndexPushedToNewArray(array, 0);
  const children = allNestedArrayValuesAtIndexPushedToNewArray(array, 1);

  const results = {
    'No Parents': uniqueValuesOfSetTheorheticDifference(children, parents),
    'One Parent': onlyOneInstanceOfValueInArray(children)
  };
  return results;
};

// function to create new array with each instance of being a parent or child
// using the fact that parents are always index 0 of pair,
// and children are always index 1 of pair
var allNestedArrayValuesAtIndexPushedToNewArray = (array, index) => {
  let newArray = [];
  for(let i in array){
    newArray.push(array[i][index]);
  }
  return newArray;
};

// function to apply to the children instances array to return values that only
// have 1 instance: making it having only one parent
var onlyOneInstanceOfValueInArray = (array) => {
  let counts = array.reduce( (obj, value) => {
     obj[value] = obj[value] ? obj[value] + 1 : 1;
     return obj;
  }, {});

  return Object.keys(counts).filter( (value) => {
      return ( counts[value] === 1 );
  }).toString();
};

// function that takes both the arrays of
// instances of being a parent & instances of being a child
// and returns only those values that exist in the parents array
// but not the children array, filtering out duplicate instances
// since a parent can have multiple children and still have no parents
var uniqueValuesOfSetTheorheticDifference = (firstArray, secondArray) => {
  let array = [];
  for (let i=0; i < secondArray.length; i++){
    if(!firstArray.includes(secondArray[i])){
      array.push(secondArray[i]);
    }
  }
  return array.filter( (value, position) =>
    array.indexOf(value) == position
  ).toString();
};
