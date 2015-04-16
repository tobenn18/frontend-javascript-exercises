module.exports.addItem = function(item,list){
    if(item.indexOf(list) == - 1){
        list.push(item);
    }
    return list;
};

module.exports.reverseSortedList = function(list){
    return list.sort().reverse();
    };