/** whichTwice - (easy)

I have an array of numbers. Every number in the array appears once
except one number which appears twice.

Write a function that finds the number that appears twice.
Name your function whichTwice()
*/
function whichTwice(arr) {
  let singles = new Set()
  for (let i = 0; i < arr.length; i++) {
    if (singles.has(arr[i])) return arr[i]
    singles.add(arr[i])
  }
}
