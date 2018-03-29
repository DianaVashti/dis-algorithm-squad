// Word Cloud Map
//
// We need to create a word cloud where the more times a word appears the bigger
// that word appears. To do this we need data. Take a string and return an
// object where the keys are all the unique words in the string and the values
// are the number of times that word appears. Make intentional decisions about
// what words you keep in your cloud data. Should we keep "and"? What about
// Proper nouns? Leave comments to describe your decisions.
//
// Try without regex.
//
// example:
// input: "Add milk and eggs, then add flour and sugar."
// output: {
//   "add": 2,
//   "milk": 1,
//   "and": 2,
//   "eggs": 1,
//   "then": 1,
//   "flour": 1,
//   "sugar": 1,
// }

let input = "Add milk and eggs, then add flour and sugar."

const wordCount = function(input) {
  let words = input.toLowerCase().split(' ')
  const counter = {}

  words.forEach((word) => {
    if (!counter[word]) {
      counter[word] = 1
    } else {
    counter[word] += 1
    }
  })
  console.log(counter);
}

wordCount(input)
