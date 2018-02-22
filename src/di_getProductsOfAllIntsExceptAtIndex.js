// Tuesday Algo - Di's Solution


const getProductsOfAllIntsExceptAtIndex = (arrayOfNums) => {
  let result = [];

  function remove(array, element) {
    return array.filter(e => e !== element);
  }

  for(i=0; i<arrayOfNums.length; i++){
    let allBut = remove(arrayOfNums, arrayOfNums[i]);

    let val = allBut.reduce((acc, index) => {
      return acc * index;
    });

    result.push(val);
  }

  return result;
};

const sampleInput = [1, 7, 3, 4];
console.log(getProductsOfAllIntsExceptAtIndex(sampleInput));
