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

  test("sum of 0.11 and 0.2 to be close to 0.3 with a precision of 1 digit after decimal point", () => {
    expect(sum(0.11, 0.2)).toBeCloseTo(0.3, 1);
  });

  test("value should be defined", () => {
    const value = "defined";
    expect(value).toBeDefined(); //pass
    expect(value).not.toBeUndefined(); //pass
    expect(undefined).not.toBeDefined(); //fails
    expect(0).toBeDefined(); //pass
    expect(null).toBeDefined(); //pass
    expect("").toBeDefined(); //pass
    expect(false).toBeDefined(); //pass
  });

  //numbers
  test("two plus two", () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(4);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  //strings
  test("there is no I in team", () => {
    expect("team").not.toMatch(/I/);
  });

  test('there is no "stop" in Christoph', () => {
    expect("Christoph").toMatch(/stop/);
  });

  //arrays and iterables

  const fruits = ["apples", "bananas", "oranges"];

  test("fruits has oranges in it", () => {
    expect(fruits).toContain("oranges");
    expect(new Set(fruits)).toContain("oranges");
  });

  test("checks array contain an object with same values", () => {
    const users = [{ name: "Akhil" }, { name: "John" }];
    expect(users).toContainEqual({ name: "John" });
    expect(users).toHaveLength(2);
  });

  //Deep Equality

  test("object assignment with new values", () => {
    const data = { fruit: "apple" };
    data["color"] = "red";
    expect(data).toEqual({ fruit: "apple", color: "red" });
  });


  //partial matching  //property matching

  test('testing partial equality',()=>{
    const user={name:'Alice',age:30};
    expect(user).toMatchObject({name:'Alice'})
    expect(user).toHaveProperty('name')
    expect(user).toHaveProperty('name','Alice');
  })

  test("testing truthy with non-zero number", () => {
    expect(10).toBeTruthy();
  });

  test("testing falsy with null", () => {
    expect(null).toBeFalsy();
  });

  test("checks value is null", () => {
    const value = null;
    expect(value).toBeNull();
  });

  //function matchers
  //toThrow()

  test("checks if function throws an error", () => {
    const throwError = () => {
      throw new Error("Oops!");
    };
    expect(throwError).toThrow();
  });

  //toThrowError

  function throwError() {
    throw new Error("Specific Error");
  }

  test("checks if function throws a specific error", () => {
    expect(() => throwError()).toThrow("Specific Error");
  });
});
