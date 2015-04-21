module.exports.copy = function(object){
    newObj = {};
    for(var keys in object){
        newObj[keys] = object[keys];
    }
    return newObj;
};

module.exports.extend = function(dest,src){
    for(value in src){
        dest[value] = src[value];
    };
    return dest;
};

module.exports.hasElems = function(obj,array){
    for(var i; i < obj.length; i++){
        if(obj[array[i]] === undefined){
            return false;
        }
    }
    return true;
};