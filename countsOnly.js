const assertEqual = function(a,b){
  if (a === b){
  
  console.log(`Assertion Passed: ${a} === ${b}`);
  
  
  }else{
  
    console.log(` Assertion Failed: ${a} !== ${b}`);
  }
  
  
  }
  
  const countOnly = function (allItems, itemsToCount) {

    
    let result ={};

    for ( let item of allItems){

      if(result[item]){
      
      if (itemsToCount[item]){
        result+=1

      }



      }else if (itemsToCount[item]){
        result[item]=1
        console.log(result)


      }




    }
       return result
  }




  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
 
  
  
   assertEqual(result1["Jason"], 1);
   assertEqual(result1["Karima"], undefined);
   assertEqual(result1["Fang"], 2);
   assertEqual(result1["Agouhanna"], undefined); 
