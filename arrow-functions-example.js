var inputs = process.argv.slice(2);
var firstCharacterArray = inputs.map((name) => name[0]);
var result = firstCharacterArray.reduce((previous, current) => previous + current);
console.log(`[${inputs}] becomes \"${result}\"`);