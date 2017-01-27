function getMidpoint(lowerBound = 0, upperBound = 1) {
  var midpoint = (lowerBound + upperBound) / 2;
  return midpoint;
};

module.exports = getMidpoint;

// module.exports = (x = 0, y = 1) => (x + y) / 2;