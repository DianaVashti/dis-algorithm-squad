// Merge Sorted Arrays (medium)
//
// You are given two arrays of numbers that are already sorted in to
// ascending order.
//
// Write a function called mergeSortedArrays() that takes two sorted arrays
// and merges them in to one array that is also sorted in ascending order.
//
// -----------------------------------------------------------------------

const mergeSortedArrays = (firstArray, secondArray) => {
  let returnArray = []
  const loopsNum = firstArray.length + secondArray.length;

  // As long as one array has items in it we contunie merging
  while( firstArray.length !== 0 || secondArray.length !== 0 ){
    // check if either array is empty and just concat the other on the solution
    // and we are done
    if(firstArray.length === 0) {
      returnArray = returnArray.concat(secondArray);
      return returnArray
    } else if(secondArray.length === 0) {
      returnArray = returnArray.concat(firstArray);
      return returnArray
    } else {
      // neither array is empty
      if(firstArray[0] <= secondArray[0]) {
        returnArray.push(firstArray[0])
        firstArray.shift()
      } else {
        returnArray.push(secondArray[0])
        secondArray.shift()
      }
    }
  }
};


console.log( mergeSortedArrays( [1,4,5,8,9],[2,4,7,11,13] ) ); // [1,2,4,4,5,7,8,9,11,13]
console.log( mergeSortedArrays( [1,4,5],[7,11,13] ) ); // [1,4,5,7,11,13]
console.log( mergeSortedArrays( [8,9,10],[1,2,3,5,6] ) ); // [1,2,3,5,6,8,9,10]
