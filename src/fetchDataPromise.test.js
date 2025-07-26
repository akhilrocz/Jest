const fetchingData = require('./fetchDataPromise')

test('test returns peanut butter',()=>{
   return fetchingData().then(data => {
    expect(data).toBe('peanut butter');
  });
})
