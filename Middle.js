const eqArrays = function (array1, array2)  {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};



const assertArraysEqual =function (array1, array2)  {
  if (eqArrays(array1, array2)) {
    console.log(`Assertion Passed: [${array1}] and [${array2}] are equal.`);
  } else {
    console.log(`Assertion Failed: [${array1}] and [${array2}] are NOT equal.`);
  }
};

const middle =function(arr) {

let newArray =[]

if(arr.length %2 === 0){

newArray.push(arr[(arr.length)-1])
newArray.push(arr[(arr.length)])


}else {

newArray.push(arr[Math.floor(arr.length/2)])



}


return newArray

}

assertArraysEqual(middle([1]), [])
 assertArraysEqual(middle([1, 2]), [])
 assertArraysEqual(middle([1, 2, 3]), [2])
 assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
 assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
 assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4])
 








