module.exports.formLetter = function(firstName, senderName, message) {
return "Hello " + firstName + "," + "\n\n" + message + "\n\n" + "Sincerely," + "\n" + senderName;
};

/*return a new string which is the concatenation of two substrings marked by the 
first and second index of each pair of indices.
 */   
module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
    return bigString.substring(startA,endA) + bigString.substring(startB,endB);
};

/*Return the position (i.e. index) of the first match of string being searching for
For example:```javascript
    findFirst("Roses are red", "re") // returns 7 (the position of the "re" in "are")*/
module.exports.findFirstMatch = function(text, searchString) {
    return text.indexOf(searchString);
};
/*- Take two strings as arguments. The first string is the one to search, the second is the one to search for
    - Return the position (a.k.a. the index) of the last match of string we're searching for
    For example:
    
    ```javascript
    findFirst("Roses are red", "re") returns 10 (the position of the "re" in "red")
    ``` */
module.exports.findLastMatch = function(text, searchString) {
    return text.lastIndexOf(searchString);
};

/*- Return the substring between the first match and the last match
    - Not include the first match or the last match in the returned substring
    For example:
    
    ```javascript
    findFirst("Roses are red, apples are really red.", "red") // returns ", apples are really "
    ```*/
module.exports.substringBetweenMatches = function(text, searchString) {
    var beginning = text.indexOf(searchString) + searchString.length;
    var ending = text.lastIndexOf(searchString);
    return text.substring(beginning,ending);
};    