const input =  process.argv[2]


function rollDice(numberOfRolls){
  let result="";
  let roll =Math.floor(Math.random()*6+1);
  for(i = 0; i < numberOfRolls; i++){

    result += ", " + Math.floor(Math.random()*6+1);



}
console.log(`rolled ${numberOfRolls}: ${result.slice(2)}`)


}

rollDice(input)
