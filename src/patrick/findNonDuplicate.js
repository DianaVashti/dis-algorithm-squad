// Find Non Duplicate - (easy)
//
// Write a function called findNonDuplicate() that takes an array of integers
// and returns the integer that appears only once. All other intergers will
// appear exactly twice. The array will not be sorted, you only know that all
// integers appear exactly twice except one, which will appear exactly once.
//
// example:
// input: [23,55,86,55,86,14,23]
// output: 14
//

function findNonDuplicate(arr) {
  const countOfNums = arr.reduce((acc, num) => {
    acc[num] ? acc[num]++ : acc[num] = 1;
    return acc;
  }, {});
  for (let key in countOfNums) {
    if (countOfNums[key] === 1) {
      return key;
    }
  }
};

console.log(findNonDuplicate([23, 55, 86, 55, 86, 14, 23]));
findNonDuplicate([23, 55, 86, 55, 86, 14, 23]);

// I think the time complexity of this algorith is 2O(n), because I'm looping through
// the array to construct an object, and then I'm looping through the object to
// find the number that is not repeated.
