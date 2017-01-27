let numberArray = process.argv.slice(2);
let minimumNumber = Math.min(...numberArray);
console.log(`The minimum of [${numberArray}] is ${minimumNumber}`); 
