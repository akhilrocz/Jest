const fetchError = require("./fetchError");

// test('promise rejects with error',() => {
//   return expect(fetchError()).rejects.toMatch('error');
// });


test('promise rejects with error',()=>{
    expect.assertions(1);
    return fetchError().catch(error=>expect(error).toMatch('error'));
})