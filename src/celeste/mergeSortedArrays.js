// Merge Sorted Arrays (medium)
//
// You are given two arrays of numbers that are already sorted in to
// ascending order.
//
// Write a function called mergeSortedArrays() that takes two sorted arrays
// and merges them in to one array that is also sorted in ascending order.
//
// -----------------------------------------------------------------------

function mergeSortedArrays(a, b) {
  // make new arrays that i can fuck w/
  let arrA = Array.from(a)
  let arrB = Array.from(b)
  let result = []

  while(arrA.length > 0 && arrB.length > 0) {
    if (arrA[0] > arrB[0]) {
      result.push(arrB.shift())
    } else {
      result.push(arrA.shift())
    }
  }

  // if there are numbers left in either array, add them to the end of the result array
  if (arrA.length > 0) {
    result = result.concat(arrA)
  } else if (arrB.length > 0) {
    result = result.concat(arrB)
  }

  return result
}

console.log(mergeSortedArrays([1,3,4,5,7,8,19], [2,3,3,4,5,6,7,8,9, 99, 100]))
