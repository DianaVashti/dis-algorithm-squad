// I have an array of numbers. Every number in the array appears once
// except one number which appears twice.
//
// Write a function that finds the number that appears twice.
// Name your function whichTwice()
//
// ---------------------------------------------------------------------------

const whichTwice = (arrayOfNums) => {
  // use set because accessing values of a set is O(1) time
  const numberSet = new Set()

  // loop through array, checking if a number is already in the set
  // if it is, we found duplicate and return it, else add to Set.
  for(let i=0; i<arrayOfNums.length; i++){
    let currentValue = arrayOfNums[i]

    if( numberSet.has(currentValue) ){
      return currentValue
    } else {
      numberSet.add(currentValue)
    }

  }
};

console.log(whichTwice([1,87,54,96,88,54,2,7,48])); // should return 54
console.log(whichTwice([1,-87,54,96,88,-87,2,-7,48])); // should return -87
console.log(whichTwice([1,-87,54,96,88,0,2,-7,48,0])); // should return 0
