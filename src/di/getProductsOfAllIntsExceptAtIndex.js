// Write a function called getProductsOfAllIntsExceptAtIndex that takes an Array
// of Whole (can be positive or negative) Integers and returns an Array where
// each index is the product of all of the other integers except the one
// originally at that index

// Example:
// Input:   [1, 7, 3, 4]
// Output: [84, 12, 28, 21]

// by calculating: [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

// do NOT use division in your solution. (can't divide by 0)
// -----------------------------------------------------------------------------

const getProductsOfAllIntsExceptAtIndex = (arrayOfNums) => {
  // create variable to store each Product Of All Ints Except At Index.
  let result = [];

  // function to remove only a certain element from an array so we can
  // multiple the rest later.
  function remove(array, element) {
    return array.filter(e => e !== element);
  }

  for(i=0; i<arrayOfNums.length; i++){
    // each loop we take the original array and remove the current given index
    // and set it to the variable allBut so to not alter the original array.
    let allBut = remove(arrayOfNums, arrayOfNums[i]);

    // use reduce to get the product of all the remaining values and set the
    // product to a variable to add to the result array from line 6.
    let val = allBut.reduce((acc, index) => {
      return acc * index;
    });

    // push the value to the result array.
    result.push(val);
  }

  // once the loop is finished our result array should also be finished.
  return result;
};

const sampleInput = [1, 7, 3, 4];
console.log(getProductsOfAllIntsExceptAtIndex(sampleInput));
