function getAverage(...numbers) {
  var sumOfNumbers = 0;
  numbers.forEach(function (value) {
    sumOfNumbers += value;
  });
  var numberOfElements = numbers.length;
  var result = sum / numberOfElements;
  return result;
}

module.exports = getAverage;