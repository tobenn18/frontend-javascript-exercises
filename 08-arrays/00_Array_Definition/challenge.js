module.exports.newArray = function(a,b,c,d){
     return newArray = [a,b,c,d];
};
module.exports.newArray(1,2,3,4);

module.exports.firstAndLast = function(a){
    var last = a.length - 1;
    return [a[0],a[last]]; 
};
//