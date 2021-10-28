const assertEqual = function(a,b){
  if (a === b){
  
  console.log(`Assertion Passed: ${a} === ${b}`);
  
  
  }else{
  
    console.log(` Assertion Failed: ${a} !== ${b}`);
  }
  
  
  }
  const eqObjects = function(object1, object2) {

  let object1Array=Object.keys(object1)
  let object2Array=Object.keys(object2)

  for (let i of object1Array ){

if (object1Array.length===object2Array.length)

return true


  }

return false
}
  
 const cd = { c: "1", d: ["2", 3] };
 const dc = { d: ["2", 3], c: "1" };
 assertEqual(eqObjects(cd,dc), true);


 const cd2 = { c: "1", d: ["2", 3, 4] };
 assertEqual(eqObjects(cd, cd2), false); 
