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

function findNonDuplicate(array) {
  let numSet = new Set()
  array.forEach((int) => {
    if (numSet.has(int)) {
      numSet.delete(int)
    } else {
      numSet.add(int)
    }
  })
  // return the only number left in the set
  return numSet.values().next().value
}

console.log(findNonDuplicate([23,55,86,55,86,14,23])) //expect 14
