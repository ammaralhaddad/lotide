var test = 'countLetters'


  function countLetters(letter){

  var counts ={}
 
  letter = letter.split(' ').join(' ')

  for(let i=0 ; i < letter.length;i++){
  
  var char = letter[i]


  if(counts[char] === undefined){
   counts[char]=0

} 
   counts[char]+=1

  }
  return counts;
  }
  
  console.log(countLetters(test))
