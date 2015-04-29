 /*- take three arguments that will define course properties
        - courseTitle (string)
        - courseDuration (string)
        - courseStudents (array)
    - return an object that has each property assigned its proper value
For example:
    ```javascript
    createCourse('Bloc Front-End Engineering', '4 weeks', ['Joe', 'Tim', 'Rob'])
    // should return {title: 'Bloc Front-End Engineering', duration: '4 weeks', students: ['Joe', 'Tim', 'Rob']}
    ```*/
module.exports.createCourse = function(courseTitle,courseDuration,courseStudents){
    var course = {
        title : courseTitle,
        duration : courseDuration,
        students : courseStudents
    }
    return course;
};
/*- Take three arguments:
        - `object`: an object to add a properties to
        - `newProp`: a property that we want to add to the object
        - `newValue`: a value that we want the new property to have
    - If `object` doesn't already have a property named `newProp`, then add `newProp` with value of
     `newValue` to `object`
    - If `object` already has `newProp`, return the `object` argument.
For example:
    ```javascript
    addProperty({}, 'firstName', 'Jim') // should return { firstName: 'Jim' }
    addProperty({firstName: 'Rob'}, 'firstName', 'Jim') // should return {firstName: 'Rob'}
    ```*/
module.exports.addProperty = function(object,newProp,newValue){
        if(object[newProp] === undefined){
            object[newProp] = newValue;
        }
        return object;
};

/*Complete the `formLetter` function. This function should:
    - take one argument, a letter, which has three properties `recipient`, `sender`, and `msg`
    - combine the three properties into a single string with an additional greeting and closing
    - insert additional new lines between the greeting, message, and signature.
For example:
    ```javascript
    formLetter({ recipient: "James", sender: "Richard", msg: "Things are well." }) 
    // should return "Hello James,\n\nThings are well.\n\nSincerely,\nRichard"
    ```*/
module.exports.formLetter = function(letter){
    return "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender
 };
 
 /*Complete the `canIGet` function. This function should:
    - Take two arguments:
        - `item`: represents what the user wants to buy
        - `money`: represents how many dollars a user has
    - return `true` if a user can afford a given item according to the price chart below, and false otherwise:
        - 'MacBook Air' - $999
        - MacBook Pro' - $1299
        - 'Mac Pro' - $2499
        - 'Apple Sticker' - $1
    - Return `false` if the `item` is not in the above list of Apple products
> Do this with 0 'if' conditions! (Hint: Place the above price table in an object).
    For example:
    ```javascript
    canIGet('MacBook Air', 100) // returns false
    canIGet('MacBook Air', 1000) // returns true
    ``` */
module.exports.canIGet = function(item,money){
    var items = {
        'MacBook Air' : 999,
        'MacBook Pro' : 1299,
        'Mac Pro' : 2499,
        'Apple Sticker' : 1
    }
    price = items[item];
    return(price !== undefined && money >= price);
};


