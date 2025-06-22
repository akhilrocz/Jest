const cloneArray = require("./cloneArray");

test("properly clones the orginal array", () => {
  const arr = [1, 2, 3, 4];
  //  expect(cloneArray(arr)).toBe(arr);    //original array and cloned array have different memory addresses so this fail
  expect(cloneArray(arr)).toEqual(arr); //checks the values
  expect(cloneArray(arr)).not.toBe(arr);
});
