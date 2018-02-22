// Given an array of integers, find the highest product you can get from three of the integers.
// The input arrayOfInts will always have at least three integers

// name your function topThreeProduct

const topThreeProduct = (arrayOfInts) => {
  // sort array of ints
  let sortedArray = arrayOfInts.sort( function sortNumber(a,b) {
    return a - b;
  });

  // store highestTwo and lowestTwo
  let highestTwo = [sortedArray[sortedArray.length - 2], sortedArray[sortedArray.length - 1]];
  let lowestTwo = [sortedArray[0], sortedArray[1]];

  // get the lowTwoProduct and highTwoProduct using reduce to be fancy
  let lowTwoProduct = lowestTwo.reduce((a,b)=>a*b);
  let highTwoProduct = highestTwo.reduce((a,b) =>a*b);

  // set highestProduct variable with no value as highestProduct could be negative or positive
  let highestProduct;

  // if low two are less than 0 or all the ints are <= 0
  // return the highest three product
  if (lowTwoProduct <= 0 || sortedArray[sortedArray.length - 1] <= 0){

    highestProduct = highTwoProduct * sortedArray[sortedArray.length - 3];

  } else {
    // first set highestProduct as lowTwoProduct * highest int
    highestProduct = lowTwoProduct * highestTwo[1];

    // then check to see if the top three ints product is higher
    if(highTwoProduct * sortedArray[sortedArray.length - 3] > highestProduct){

      highestProduct = highTwoProduct * sortedArray[sortedArray.length - 3];

    }
  }

  return highestProduct;

};

const allNegatives = [-1,-6,-2,-5,-3,-100]; // -1*-2*-3 = -6
const oneNegative = [-11,4,2,6,7,8]; // 8*7*6 = 336
const onePositive = [-3,-2,-1,5]; // 5*-3*-2 = 30
const twoNegatives = [-6,-8,9,3,2,1]; // -6*-8*9 = 432
const allPositive = [2,5,3,4,7,8]; // 8*7*5 = 280
const hasZero = [-4,-3,-2,-1,0] // 0

console.log("should equal -6 :", topThreeProduct(allNegatives));
console.log("should equal 336 :", topThreeProduct(oneNegative));
console.log("should equal 30 :", topThreeProduct(onePositive));
console.log("should equal 432 :", topThreeProduct(twoNegatives));
console.log("should equal 280 :", topThreeProduct(allPositive));
console.log("should equal 0 :", topThreeProduct(hasZero));
