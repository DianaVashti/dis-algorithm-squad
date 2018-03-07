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
// -----------------------------------------------------------------------------

const findNonDuplicate = (arrayOfInts) => {
  const mySet = new Set()
  for(let i in arrayOfInts){
    mySet.has(arrayOfInts[i])
      ? mySet.delete(arrayOfInts[i])
      : mySet.add(arrayOfInts[i])
  }
  return mySet.values().next().value
}

console.log( "should be 14: ", findNonDuplicate([23,55,86,55,86,14,23]) );
