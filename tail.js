onst assertEqual = function(a,b){
  if (a === b){
  
  console.log(`Assertion Passed:${a}===${b}`)
  
  
  }else{
  
    console.log(`Assertion Failed: ${a} !== ${b}`)
  }
  
  
  }

  
const  tail = function(array){
return array.slice(1)


  }

  // Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
