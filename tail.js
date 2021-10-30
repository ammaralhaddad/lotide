const assertEqual = function(a,b){
  if (a === b){
  
  console.log(`Assertion Passed:${a}===${b}`)
  
  
  }else{
  
    console.log(`Assertion Failed: ${a} !== ${b}`)
  }
  
  
  }

  
const  tail = function(array){
let result = array.slice(1)
return result


  }

  const words = ["Yo Yo", "Lighthouse", "Labs"];
 console.log(tail(words)); 
 console.log(assertEqual(words.length, 3)); 
 console.log(tail(['Test']));
 console.log(tail([])); 
