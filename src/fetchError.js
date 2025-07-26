function fetchError(){
    return Promise.reject('error');  //promise rejected with error
}


module.exports = fetchError;