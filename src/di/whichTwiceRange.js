// We have an array of n + 1 numbers. Every number in the range 1..n appears once
// except for one number that appears twice.
//
// Write a function for finding the number that appears twice.
//
// call your function whichTwiceRange()
//
// -----------------------------------------------------------------------

const whichTwiceRange = (range) => {
  // because we were given the terms n + 1 size and 1..n range we know
  // the numbers are in ascending order, incrementing by 1 each time but one
  // number appears twice. Because its a triangular series (each index is
  // the previous index + 1) we can use some math.

  let n = range[range.length - 1];
  let x = range.reduce((a,b)=>a+b);
  return x - (((n * n) + n) / 2);
}

console.log(whichTwiceRange([1,2,3,4,5,5,6,7,8,9])); // should return 5
