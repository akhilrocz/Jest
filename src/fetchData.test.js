const fetchData = require("./fetchData");
test("callback returns peanut butter", (done) => {
  function callback(data) {
    expect(data).toBe("peanut butter");
    done();
  }
  fetchData(callback);
});
