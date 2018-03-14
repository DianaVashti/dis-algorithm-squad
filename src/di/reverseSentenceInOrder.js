// Reverse Sentence In Order (medium)

// Take a string that is a short sentence and only includes letters and single
// spaces no punctuation or other chars, and reverse the order of the words.
//
// The first step which is required as part of the specs is that your input
// is the string split in to an array of single chars.
//
// Example:
  // string: "friend cake pound the steal"
  // input: [ 'f', 'r', 'i', 'e', 'n', 'd', ' ',
  //          'c', 'a', 'k', 'e', ' ',
  //          'p', 'o', 'u', 'n', 'd', ' ',
  //          't', 'h', 'e', ' ',
  //          's', 't', 'e', 'a', 'l'];
//   output: "steal the pound cake friend"
//
// -----------------------------------------------------------------------------

const reverseSentenceInOrder = (arrayOfChars) => {
  let joinToString = arrayOfChars.join('');
  let splitAtSpaces = joinToString.split(' '); // array of words
  let reversedArray = [];

  while(splitAtSpaces.length){
    reversedArray.push(splitAtSpaces.pop());
  }
  return reversedArray.join(' ');
}

const sampleInput = [ 'f', 'r', 'i', 'e', 'n', 'd', ' ',
                      'c', 'a', 'k', 'e', ' ',
                      'p', 'o', 'u', 'n', 'd', ' ',
                      't', 'h', 'e', ' ',
                      's', 't', 'e', 'a', 'l'];

console.log(reverseSentenceInOrder(sampleInput));
