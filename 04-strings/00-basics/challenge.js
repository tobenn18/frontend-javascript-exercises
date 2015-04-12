module.exports.formLetter = function(firstName, senderName, message) {
return "Hello " + firstName + "," + "\n\n" + message + "\n\n" + "Sincerely," + "\n" + senderName;
};


module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
    return bigString.substring(startA, endA) + bigString.substring(startB, endB);
};

module.exports.findFirstMatch = function(text, searchString) {
    return text.indexOf(searchString);
};

module.exports.findLastMatch = function(text, searchString) {
    return text.lastIndexOf(searchString);
};

module.exports.substringBetweenMatches = function(text, searchString) {

  var beginning = text.indexOf(searchString)+searchString.length; 

  var ending = text.lastIndexOf(searchString); 

  return(text.substring(beginning,ending)); 

};    