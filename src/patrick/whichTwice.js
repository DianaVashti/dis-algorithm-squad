// whichTwiceRange - (easy-medium)
//
// We have an array of n + 1 numbers. Every number in the range 1..n appears once
// except for one number that appears twice.
//
// Write a function for finding the number that appears twice. We can do this
// in O(n) time and O(1) space! Don't forget the range described above is a
// triangular series 😉
//
// call your function whichTwiceRange()

function whichTwiceRange(arr) {
  let numbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (numbers.length === 0) {
      numbers.push(arr[i]);
    } else {
      if (numbers[numbers.length - 1] === arr[i]) {
        return arr[i];
      } else {
        numbers.push(arr[i]);
      }
    }
  }
}

// Implementation if starting array is not sorted

// function whichTwiceRange(arr) {
//   let numbers = new Set();
//   for (let i = 0; i < arr.length; i++) {
//     if (numbers.has(arr[i])) {
//       return arr[i];
//     } else {
//       set.add(numbers[i]);
//     }
//   }
// }

const arr1 = [1, 2, 3, 4, 4];
const arr2 = [1, 1, 2, 3, 4];
const arr3 = [1, 2, 3, 3, 4, 5];
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10];

whichTwiceRange(arr1);
whichTwiceRange(arr2);
whichTwiceRange(arr3);
whichTwiceRange(arr4);

// The time complexity of this function is O(n); worst case scenario, the function
// will have to traverse the entire array to find the repeated number
