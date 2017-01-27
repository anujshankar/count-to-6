function getAverage(...numbers) {
  var sum = 0;
  numbers.forEach(function (value) {
    sum += value;
  });
  var numberOfElements = numbers.length;
  var result = sum / numberOfElements;
  return result;
}

module.exports = getAverage;