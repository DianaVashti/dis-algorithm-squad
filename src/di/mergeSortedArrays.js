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

  // one single loop equal to the lengths of both arrays together
  for( let i=0; i < loopsNum; i++ ){
    if(firstArray[0] <= secondArray[0]){
      returnArray.push(firstArray[0])
      firstArray.shift()
    } else {
      returnArray.push(secondArray[0])
      secondArray.shift()
    }
  }
  // at this point all items of firstArray and secondArray have been shifted off
  // and pushed to our returnArray in order. 
  return returnArray

};

console.log( mergeSortedArrays( [1,4,5,8,9],[2,4,7,11,13] ) ); // [1,2,4,4,5,7,8,9,11,13]
