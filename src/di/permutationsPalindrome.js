// check if a at least one of a sting's permutations could produce a palindrome
//
// call your function permutationsPalindrome
//
// You can assume all strings contain no spaces and all chars are lowercase
//
// examples:
// input: "ivicc"
// output: true
//
// input: "civil"
// outut: false
// -----------------------------------------------------------------------------


const permutaionsPalindrome = (string) => {
  // to be a palindrome one character must occur an odd number of times
  // and EVERY other character must occur and even number of times

  // split sting into array of characters
  const arrayOfChars = string.split('');


  // create object where there is a key for each char where
  // the value is how many times it orrcurs
  let charCountObj = arrayOfChars.reduce( (acc, i) => {
    acc[i] = acc[i] ? acc[i] + 1 : 1;
    return acc;
  }, {});


  // build array of characters that occur an odd number of times
  let oddOccurances = Object.keys(charCountObj).filter( val => {
    return (charCountObj[val] % 2 === 1);
  });


  // as long as only one character occurs and odd number of times
  // at least one permutation could be a palindrome
  return oddOccurances.length === 1
    ? true
    : false;

};

console.log("Should be true:",permutaionsPalindrome("cavvgjyayjc"));
console.log("Should be true:",permutaionsPalindrome("ivicc"));
console.log("Should be false:",permutaionsPalindrome("civil"));
console.log("Should be false:",permutaionsPalindrome("mississippi"));
