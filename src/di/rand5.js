// Create a function called rand5() that simulates a 5 sided dice that uses the
// following function called rand7() to achieve it.
//
// Your rand5() CANNOT use Math.random() and MUST utilize rand7()
//
const rand7 = () => {
  return Math.floor(Math.random() * (8 - 1)) + 1;
}
//
// -----------------------------------------------------------------------------

// since we have a function that gives us a random number 1-7 we create a 7x7
// matrix where the numbers 1-5 appear an equal number of times. 49 % 5 === 4
// so we have 4 spaces that must be null, undefined, or a non 1-5 value.
const matrixOfNums = [
  [1,2,3,4,5,1,2],
  [3,4,5,1,2,3,4],
  [5,1,2,3,4,5,1],
  [2,3,4,5,1,2,3],
  [4,5,1,2,3,4,5],
  [1,2,3,4,5,1,2],
  [3,4,5,0,0,0,0]
];

const rand5 = () => {
  // by calling rand7() twice we can map these as x,y coordinates on our matrix
  // and set the value at matrixOfNums[x][y] as our random number.
  // dont forget arrays are 0 indexed and rand7() returns value 1-7.
  let value = matrixOfNums[rand7()-1][rand7()-1];

  // if we got an undefined value back we recursively call rand5 again until
  // we get back a value 1-5 and then return that value
  return value === 0
    ? rand5()
    : value;

}

// and a better solution via Bonnie
const betterRand5 = () => {
  // rand7 returns random number
  let value = rand7();

  // if its 6 or 7 run it again until its 1-5
  while(value > 5){
    value = rand7();
  }

  // return it
  return value;
}

// sanity check
for(i=0; i<=10; i++){
  console.log(rand5());
}
console.log("");
for(i=0; i<=10; i++){
  console.log(betterRand5());
}
