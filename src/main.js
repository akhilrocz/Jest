function sum(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return;
  }
  return a + b;
}

function diff(a, b) {
  return a - b;
}

function isEven(num) {
  return num % 2 === 0;
}

function getUser() {
  return { id: 1, name: "Akhil" };
}

module.exports = { sum, diff, isEven, getUser };
