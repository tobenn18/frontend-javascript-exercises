/* - return true if the strings are the same
    - return false if the strings are different*/
module.exports.equalStrings = function(stringOne, stringTwo) {
   return stringOne === stringTwo; 
    
};
// - return true unless the two arguments are the same type and are equal to each other
module.exports.notEqual = function(one, two) {
    return one !== two;
        };

/*- return a boolean that tells us whether middle is in between upper and lower
For example:
    ```javascript
    inBetween(1,3,5) // should return true
    inBetween(3,1,5) // should return false
    ```*/
module.exports.inBetween = function(lower, middle, upper) {
        return lower < middle && middle < upper;
            };

/*- take one argument, 'number', which is a number
    - return true when the number is:
        - not between 10 and 20, it also can't be 10 or 20 
        - not between 42 and 75, it also can't be 75. 42 is allowed 
        - not between 1 and 6. 1 and 6 are allowed*/
module.exports.outsideRanges = function(number) { /*doing the opposite of what is asked*/
    var inRange = (10 <= number && number <= 20)
             || (42 < number && number <= 75) 
             || (1 < number && number < 6);
        
        return !inRange;   
};
/* - return true if name is 'NYTimes' or 'LATimes', and price is greater than or equal to 1
For example:
    ```javascript
    nameAndPrice('NYTimes', 1) // returns true
    nameAndPrice('LATimes', 0) // returns false
    nameAndPrice('NYTimes', 0) // returns false
    ``` */
module.exports.nameAndPrice = function(name, price) {
        return (name === "NYTimes" || name === "LATimes") && (price >= 1);
};
//