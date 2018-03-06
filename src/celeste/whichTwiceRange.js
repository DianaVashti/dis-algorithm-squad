/**
whichTwiceRange - (easy-medium)

We have an array of n + 1 numbers. Every number in the range 1..n appears once
except for one number that appears twice.

Write a function for finding the number that appears twice. We can do this
in O(n) time and O(1) space! Don't forget the range described above is a
triangular series 😉

call your function whichTwiceRange()
 */
function whichTwiceRange(arr) {
  let n = arr.length - 1
  let totalWithoutExtra = (n%2 == 0) ? (n + 1) * n/2 : (n + 1)/2 * n
  return arr.reduce((a, b) => { return a + b }) - totalWithoutExtra
}
