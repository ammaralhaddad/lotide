cconst assertEqual = function(a,b){
  if (a === b){
  
  console.log(`Assertion Passed:${a}===${b}`)
  
  
  }else{
  
    console.log(`Assertion Failed: ${a} !== ${b}`)
  }
  
  
  }
  const head =function(array) {
    if (array === []) {
      return undefined;
    } else {
      return array[0];
    }
  }
  
 
  

assertEqual(head([5, 8, 0]), 8);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "labs");
