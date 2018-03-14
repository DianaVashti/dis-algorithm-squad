// Bubble Sort: (aka the second worst sorting algorithm, after Bogo Sort)
//
// write a function called bubbleSort that takes an array of random integers
// and returns an array of those ints sorted in ascending order.
//
// Bubble Sort specs:
// - performs loops where all sorting is employed by looking at 2 adjacent
//     indexs of our input array and swaps them if the left is bigger than the
//     right
// - loops from the start of the array each time.
//
// hint: after each loop we know that the next largest value is in its correct
//       place in the array. After the first loop the largest value is at the
//       end. after the second loop the second-to-largest value will be second
//       from the end. etc...
//
// The array passed to your function will contain only positive or negative
// whole integers.
//
// -----------------------------------------------------------------------------

const bubbleSort = (arrayOfInts) => {
  let sorted = false;
  let limit = arrayOfInts.length - 1;
  while (sorted === false){   // until sorted we loop
    let swaps = 0; // counter to see if we did any swaps

    for(let i=0; i<=limit; i++){ // loop from beginning to limit and count swaps
      if(arrayOfInts[i] > arrayOfInts[i+1]){ // if we should swap, swap and increment swaps counter
        let savedNextValue = arrayOfInts[i+1];
        arrayOfInts[i+1] = arrayOfInts[i];
        arrayOfInts[i] = savedNextValue;
        swaps = swaps + 1;
      }
    }

    limit = limit - 1; // move limit back after each loop
    swaps === 0 ? sorted = true : null; // if no swaps we are sorted, else loop-it
  }
  return arrayOfInts; // sorted!
}

const randNum = () => {
  return Math.floor((Math.random() * 100) + 1);
}

for(let k=0; k<20; k++){
  console.log(bubbleSort(
    [randNum(), randNum(), randNum(), randNum(), randNum(), randNum(), randNum()]
  ));
}
