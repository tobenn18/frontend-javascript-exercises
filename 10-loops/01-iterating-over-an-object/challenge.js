/*Complete the `getKeys` function. This function should:
    - accept one argument, an object
    - return an array of each of the keys in the object
For example:
    ```javascript
    getKeys({name: "Rob", age: 101}) // returns ["name", "age"]   
    ```*/
module.exports.getKeys = function(object){
   var newArray = [];
   for(var property in object){
        newArray.push(property);
   }
   return newArray;
};

/*Complete the `getValues` function. This function should:
    - accept one argument, an object
     - return an array of each of the values in the object
For example:
    ```javascript
    getValues({name: "Rob", age: 101}) // returns ["Rob", 101]
    ```*/
module.exports.getValues = function(object){
    var values = [];
    for(var property in object){
        values.push(object[property]);
    }
    return values;
};

/*Complete the `objectToArray` function. This function should:
    - convert the object passed in to an array of strings
    - each string should be in the format of "[key] is [value]" for each key/value pair in the object
    - if an empty object is passed in, an empty array should be returned
For example:
    ```javascript
    objectToArray({name: "Rob", age: 101}) // should return ["name is Rob", "age is 101"]
    ```*/
module.exports.objectToArray = function(object){
   var strings = [];
    for(var property in object){
        strings.push(property + " is " + object[property]);
    }
    return strings;
};

