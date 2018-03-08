// Merge Sorted Arrays (easy-medium)
//
// You are given two arrays of numbers that are already sorted in to
// ascending order.
//
// Write a function called mergeSortedArrays() that takes two sorted arrays
// and merges them in to one array that is also sorted in ascending order.

// [1, 2, 3, 4, 5], [6, 7, 8, 9, 10]
// [1, 3, 5, 7, 9], [2, 4, 6, 8, 10]

function mergeSortedArrays(arr1, arr2) {
  let mergedArray = arr1.concat(arr2);
  mergedArray.sort((a, b) => a - b);
  console.log(mergedArray);
  return mergedArray;
}

mergeSortedArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);
mergeSortedArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]);

// I'm not sure about the time complexity of this one. The concat operation I think
// is O(n) in this case, because it has to run a push method for each element in
// the second array. The worst case scenario is dependent on the sort method used
// on line 14. I believe the time complexity of the sort is O(n log n), which is
// worse than O(n). I therefore think the time complexity is O(n log n).
