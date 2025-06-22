function sum(a,b){
    if(isNaN(a) || isNaN(b)){
        return;
    }
    return a+b;
}


function diff(a,b){
    return a-b;
}


module.exports =sum;