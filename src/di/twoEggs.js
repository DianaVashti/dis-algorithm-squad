// A building has 100 floors. One of the floors is the highest floor an egg can
// be dropped from without breaking.
//
// If an egg is dropped from above that floor, it will break. If it is dropped
// from that floor or below, it will be completely undamaged and you can drop
// the egg again.
//
// Given two eggs, find the highest floor an egg can be dropped from without
// breaking, with as few drops as possible.
//
// example:
// input: integer of maxFloor
// output: integer of how many drops it took to discover the maxFloor
//
// -----------------------------------------------------------------------------

const twoEggs = (maxFloor) => {
  // this one takes some serious math-foo.
  // first we have to think about ways this could be optimized.
  // a binary approach would have a max number of drops of 50 if the max floor
  // was 49.

  // if we go every 10 floors we would have a max of 19 drops if the max floor
  // was 99 or 98 (10,20,30,40,50,60,70,80,90,100*,91,92,93,94,95,96,97,99)
  // * means first egg broke.

  // There is a mathamatical way to optimise this.
  // The more floors we skip means the more possible drops we have once we
  // encounter the first break. Also, if our increment is too small between
  // the drops until the first break, we risk adding a lot of drops, before
  // we move to the phase of trying individual floors between the last safe drop
  // and where the first egg broke.

  // What if we decreased how many floors we skip each time. Then the number of
  // potential induvidual floor drops is offset by reducing the range of floors
  // skipped each drop.

  // That sounds good but there is still the question of where do we start?
  // Instead of picking random places lets do some math.

  // Let n be the number of floors we skip the first time.
  // Let 1 be the number of floors we skip the last time.
  // That means n + (n-1) + (n-2)... + 1 = 100.
  // The left side of this equation is what is called a triangular series.
  // This means each block could be a row in an equalateral triangle
  // aka one more than the one before:
  // A triangular series always starts with 1 and increases by 1 with each number.

  //       *       = 1*
  //      * *      = 2*
  //     * * *     = 3*
  //    * * * *    = 4*
  //   * * * * *   = 5*
  //  * * * * * *  = 6*

  // in this triangle above there are 10 *'s.
  // since our last row has 6* let's let n = 6
  // There is a patten all triangle series' follow:
  // The first row plus the last row === second row + second-to-last-row === third row + third-to-last row ... etc..
  // example from above triangle 1+6 === 2+5 === 3+4 === 7
  // since we said n = 6, each pairs total is equal to n + 1
  // and there are n/2 or in this instance 6/2 === 3 pairs: (1,6)(2,5)(3,4)

  // so our triagle above has 21 *'s which is equal to:
  // (n+1)*(n/2) and since n = 6: (6+1)*(6/2) or (7)*(2) === 21 (the number of *'s)

  // (n+1)*(n/2) can be reduced to (n^2 + n) / 2

  // Now you might say we are talking about 100 floors, not a triangle,
  // and that's true, but applying this formula where the number of floors we
  // skip is one less each time is the same as starting from the bottom
  // of this triangle and working up skipping floors equal to the number of *
  // on each row of the triangle.

  // So given our building has 100 floors, to figure out n, or the number of
  // floors to skip the first drop we can use this equation:

  // (n^2 + n) / 2 === 100
  // or:
  // (n^2 + n) === 200
  // and finally refactored into our good old friend the quadratic equation:
  // n^2 + n - 200 = 0
  // (the quadratic equation solves for x in the formula ax^2 + bx + c = 0)
  // here a = 1, b = 1, and c = -200, and x is replaced with n:
  // 1n^2 + 1n + -200

  // The quadratic equation is x = (-b +- sqrt(b^2 - 4ac)) / 2a (returns and positive and negative solution)

  // in our application we only are interested in the positive solution

  // remember we determined a = 1, b = 1, and c = -200, and we are calling x = n.

  // so after ALL OF THAT the first floor we should drop our egg from is:
  // (-1 +- sqrt(-1*-1 - 4*1*-200)) / 2*1
  // = (-1 +- sqrt( 1 - -800 )) / 2
  // = (-1 +- sqrt(801)) / 2
  // = (-1 +- 28.30194339616981) / 2 = ~ 27.3019 / 2 & -29.3019 / 2
  // = 13.65  & -14.65
  // and since we only care about the positive value we should drop our egg from
  // the 13.65th floor which doesn't exist so let's round and start at
  // n = 14

  // BOOM!

  // Now why do all this? Because the algorithm asked us to do this in the least
  // drops and now we have a worst case of 14 drops!!! at floor 98.
  // (14,27,39,50,60,69,77,84,90,95,99*,96,97,98) = 14 drops!

  // why isn't 99 or 100 the worst case?
  // if it's 99 we drop at 99 on the 9th drop and it doesn't break and on the
  // 10th drop it does so we don't even need to drop it again.
  // heres the floors: (14,27,39,50,60,69,77,84,90,95,99,100*) = 12 drops.
  // and 100 is the same except it doesn't ever break. (two eggs saved! yum!)

  // so to review:
  // the binary approach has a worst case of 50 drops
  // skipping every 10 has a worst case of 19 drops
  // but our quadratic triangular series equation has a worst case of 14 drops!

  // so let's code it!
  let n = 14;
  let currentFloor = 14;
  let drops = 0;
  let eggs = 2;

  // keep dropping until it breaks
  while(maxFloor > currentFloor && currentFloor < 99){
    drops = drops + 1;
    n = n - 1;
    currentFloor = currentFloor + n;
    if(currentFloor > maxFloor){
      eggs = eggs - 1;
    }
  }

  // if eggs still equals 2 we know it didn't break but the above didn't account
  // for dropping at 99 or 100 and since both equal the 10 drops until
  // before floor 99, we know
  if(eggs === 2){
    drops = drops + 2;
    return drops;
  } else {
  // else currentFloor = currentFloor - n + 1 drop until egg breaks

    // go back to floor after last floor where it didn't break
    currentFloor = currentFloor - n + 1;

    // until our last egg breaks..
    while(eggs > 0){
      drops = drops + 1
      // if it broke
      if(currentFloor > maxFloor){
        eggs = eggs - 1;
        return drops;
      }
      // if it didn't
      currentFloor = currentFloor + 1;
    }
  }
}

console.log(twoEggs(0));
