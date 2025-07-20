const { sum, diff, isEven, getUser } = require("./main");

describe("test sum function", () => {
  test("adds 1+2 returns 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds 1 + "hello" to return undefined', () => {
    expect(sum(1, "hello")).toBeUndefined();
  });

  test("subtracts 5 - 3 equals 2", () => {
    expect(diff(5, 3)).toBe(2);
  });

  test("checks if 4 is even", () => {
    expect(isEven(4)).toBeTruthy();
  });

  test("returns user object with name Akhil", () => {
    expect(getUser()).toEqual({ id: 1, name: "Akhil" });
  });

  test("sum of 2 and 3 not equal to 10", () => {
    expect(sum(2, 3)).not.toBe(10);
  });
});
