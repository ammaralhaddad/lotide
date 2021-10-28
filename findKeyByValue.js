const assertEqual = function(a,b){
  if (a === b){
  
  console.log(`Assertion Passed: ${a} === ${b}`);
  
  
  }else{
  
    console.log(` Assertion Failed: ${a} !== ${b}`);
  }
  
  
  }
  


const  findKeyByValue = function(object,value){

const  show =Object.keys(object)

for (const key of show  ){

if(object[key]=== value ){

return key


}
return undefined
}

};




const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"


}





assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
