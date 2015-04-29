/*Complete the `stream` function. This function should:
    - take two arguments, a `conditionalFn` and an `actionFn`.
    - call `actionFn` until `conditionalFn` returns false.
    - return nothing.
For example:
    ```javascript
    conditionalFn = function() { return false; };
    actionFn = function() { console.log("Hello!"); };
    stream(conditionalFn, actionFn); // Prints nothing.
    
    counter = 10;
    conditionalFn = function() { 
      counter--;
      return counter >= 0; 
    };
    stream(conditionalFn, actionFn); // should print "Hello" 10 times.
    ```*/

module.exports.stream = function(conditionalFn, actionFn){

    // call actionFn until conditionalFn returns false
    // while conditionalFn is not returning false, call actionFn
    while (conditionalFn()) {
        actionFn();
    }

/*
    conditionalFn = function() { return false; };
    actionFn = function() { console.log("Hello!"); };
        var i = 0;
        while (i < 10) {
            actionFn();
             i++; 
        }
        conditionalFn();*/
    };

/*Complete the `sumNumbers` function. This function should:
    - take an array of numbers as an argument.
    - return the sum of the numbers.
    - this function should use a `while` loop.
For example:
    ```javascript
    sumNumbers([]); // should return 0.
    sumNumbers([1,2,3,4]); // should return 10.
    ``` */
module.exports.sumNumbers = function(array){
    var i = 0;
    var sum = 0;
    while(i < array.length){
        sum += array[i];
        i++;
    }
    return sum;
};
/*
