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
//
// -----------------------------------------------------------------------------

const wordCloudMap = (inputString) => {

  // create a Set of all the ignored words
  // these words were chosen from a list of words one should omit from a
  // google search and it still be just fine.
  const ignoredWords = new Set(["a","about","above","above","across","after","afterwards","again","against","all","almost","alone","along","already","also","although","always","am","among","amongst", "amoungst", "amount", "an", "and", "another", "any","anyhow","anyone","anything","anyway", "anywhere", "are", "around", "as",  "at", "back","be","became", "because","become","becomes", "becoming", "been", "before", "beforehand", "behind", "being", "below", "beside", "besides", "between", "beyond", "bill", "both", "bottom","but", "by", "call", "can", "cannot", "cant", "co", "con", "could", "couldnt", "cry", "de", "describe", "detail", "do", "done", "down", "due", "during", "each", "eg", "eight", "either", "eleven","else", "elsewhere", "empty", "enough", "etc", "even", "ever", "every", "everyone", "everything", "everywhere", "except", "few", "fifteen", "fify", "fill", "find", "fire", "first", "five", "for", "former", "formerly", "forty", "found", "four", "from", "front", "full", "further", "get", "give", "go", "had", "has", "hasnt", "have", "he", "hence", "her", "here", "hereafter", "hereby", "herein", "hereupon", "hers", "herself", "him", "himself", "his", "how", "however", "hundred", "i", "ie", "if", "in", "inc", "indeed", "interest", "into", "is", "it", "its", "itself", "keep", "last", "latter", "latterly", "least", "less", "ltd", "made", "many", "may", "me", "meanwhile", "might", "mill", "mine", "more", "moreover", "most", "mostly", "move", "much", "must", "my", "myself", "name", "namely", "neither", "never", "nevertheless", "next", "nine", "no", "nobody", "none", "noone", "nor", "not", "nothing", "now", "nowhere", "of", "off", "often", "on", "once", "one", "only", "onto", "or", "other", "others", "otherwise", "our", "ours", "ourselves", "out", "over", "own","part", "per", "perhaps", "please", "put", "rather", "re", "same", "see", "seem", "seemed", "seeming", "seems", "serious", "several", "she", "should", "show", "side", "since", "sincere", "six", "sixty", "so", "some", "somehow", "someone", "something", "sometime", "sometimes", "somewhere", "still", "such", "system", "take", "ten", "than", "that", "the", "their", "them", "themselves", "then", "thence", "there", "thereafter", "thereby", "therefore", "therein", "thereupon", "these", "they", "thickv", "thin", "third", "this", "those", "though", "three", "through", "throughout", "thru", "thus", "to", "together", "too", "top", "toward", "towards", "twelve", "twenty", "two", "un", "under", "until", "up", "upon", "us", "very", "via", "was", "we", "well", "were", "what", "whatever", "when", "whence", "whenever", "where", "whereafter", "whereas", "whereby", "wherein", "whereupon", "wherever", "whether", "which", "while", "whither", "who", "whoever", "whole", "whom", "whose", "why", "will", "with", "within", "without", "would", "yet", "you", "your", "yours", "yourself", "yourselves", "the"]);

  // use this set to eliminate punctuation from words
  const alphabet = new Set(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"])

  // clean up the string:
  // lowercase all words
  // need to remove all punctuation
  let splitStringAtSpaces = inputString.split(" ");

  // go through each and split off punctuation
  for(let i=0; i<splitStringAtSpaces.length; i++){
    // make sure always lowercase
    splitStringAtSpaces[i] = splitStringAtSpaces[i].toLowerCase();
    // if first character of string is not a lowercase letter
    // remove it
    while( !alphabet.has(splitStringAtSpaces[i].charAt(0)) ){
      splitStringAtSpaces[i] = splitStringAtSpaces[i].slice(1)
    }

    while( !alphabet.has(splitStringAtSpaces[i].charAt(splitStringAtSpaces[i].length - 1)) ){
      splitStringAtSpaces[i] = splitStringAtSpaces[i].slice(0,-1)
    }
  }

  // filter out ignored words
  let filteredOutIgnoredWords = splitStringAtSpaces.filter(i => {
    return !ignoredWords.has(i);
  })

  // create and return word count hash map
  return filteredOutIgnoredWords.reduce( (acc, i) => {
    acc[i] = acc[i] ? acc[i] + 1 : 1;
    return acc;
  }, {})

};

console.log(wordCloudMap("I am -a. sample!!! input :string, do you love me?? string"))
