/*Complete the `copy` function. This function should:
    - take one object as an argument
    - create a new object and copy all of the properties of the input into the new object
    - return the new object
For example:
    ```javascript
    copy({name: "Rob"}) // returns a new object {name: "Rob"}
    ```*/
module.exports.copy = function(object){
   var newObj = {}; 
   for(var property in object){
        newObj[property] = object[property];
   }
   return newObj;
};

/*Complete the `extend` function. This function should:
    - take two dictionaries as arguments (`dest` and `src`) and copy all of the properties (e.g. key, value pairs) of `src` into `dest`
    - return a modified `dest`
For example:
    ```javascript
    extend({name: "Rob"}, {age: 101}) // should modify and return `dest` with content of {name: "Rob", age: 101}
    extend({name: "Rob"}, {name: "Steve"}) // should modify and return `dest` with content of {name: "Steve"}
    ```*/
module.exports.extend = function(dest,src){
    for(var property in src){
        dest[property] = src[property];
    }
    return dest;
};
/*Complete the `hasElems` function. This function should:
    - take two arguments. The first is an object and the second is an array of elements
    - return `true` when all of the elements in the array are keys in the object, false otherwise
*/
module.exports.hasElems = function(obj,elems){  /*go over with matt*/
   for(var i = 0; i < elems.length; i++){
        if(obj[elems[i]] === undefined){
            return false;
        }
   }
    return true; 
};


