function makeImportant(inputString, numberOfTimes = `${inputString.length}`){
  return (`${inputString}${'!'.repeat(numberOfTimes)}`);
}

module.exports = makeImportant;
