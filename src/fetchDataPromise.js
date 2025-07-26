function fetchingData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("peanut butter"), 1000);
  });
}

module.exports = fetchingData;
