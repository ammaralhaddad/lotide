onst assertEqual = require('../assertEqual');
const tail = require('../tail');





module.exports = tail

const words = ["Yo Yo", "Lighthouse", "Labs"];
 console.log(tail(words)); 
 console.log(assertEqual(words.length, 3)); 
 console.log(tail(['Test']));
 console.log(tail([])); 
