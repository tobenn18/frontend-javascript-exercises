 /*- take four arguments
    - return an array with those arguments*/
module.exports.newArray = function(a,b,c,d){
    return [a,b,c,d];
};

/*- Create a function named **firstAndLast**. This function should:
   - take one argument, an array with at least 3 elements
   - return a new array with the first and last element of the passed array
For example:
   ```javascript
   var array = ['one', 3, 'cool' 4];
   firstAndLast(array) // should return ['one', 4]
   ```*/
module.exports.firstAndLast = function(a){
  var last = a.length - 1;
  return [a[0],a[last]];
//