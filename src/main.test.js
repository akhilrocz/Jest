const sum = require("./main");

describe("test sum function", () => {
  test("adds 1+2 returns 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds 1 + "hello" to return undefined', () => {
    expect(sum(1, "hello")).toBeUndefined();
  });
});
