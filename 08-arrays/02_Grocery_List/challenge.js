/*- Create an `addItem` function. This function should take two arguments:
    - the first argument is the item you want to add to the end of the list
    - the second argument is the array that the item will be added to. 
    - Don't add an item to the list if it already exists in the list

    - Unless an item is in the list, add it to the list
For example:
    ```javascript
    addItem(1, [5,4,3,2]); // returns [5,4,3,2,1]
    addItem("brown", ["green", "yellow"]); // returns ["green", "yellow", "brown"]
    addItem("brown", ["green", "yellow", "brown"]); // returns ["green", "yellow", "brown"] since "brown" was already present
    ```*/
module.exports.addItem = function(item,list){
    if(list.indexOf(item) === -1){
         list.push(item);
    }
        return list;

};
/*Create a `reverseSortedList` function. This function should:
    - take one argument, an array
    - it should return the array sorted but in reverse
For example:
    ```javascript
    reverseSortedList([2,4,1,5,3]); // returns [5,4,3,2,1]
    reverseSortedList(["b", "d", "q", "a"]); // returns ["q", "d", "b", "a"]
    ```*/
module.exports.reverseSortedList = function(list){
    list.sort(),list.reverse();
    return list;
    };