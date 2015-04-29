
/*This function should return:
        - "Too high" if `guess` is greater than `fav` 
        - "Too low" if `guess` is less than `fav` 
        - "You got it!" if `guess` is equal to `fav`*/
module.exports.favoriteNumber = function(fav,guess){
   if(guess > fav){
      return "Too high";
   }
   if(guess < fav){
      return "Too low";
   }
   if(guess == fav){
    return "You got it!";
   }
};

/*
  - the first number is a 3, 5, or 7
  - the second number is 2
  - the third number is between 5 and 100. 5 and 100 are both valid numbers
  - the fourth number is less than 9 or greater than 20. 9 and 20 both invalid numbers
*/

module.exports.checkLock = function(a,b,c,d) {
  // if the first number is a 3, 5, or 7
  if(a !=3 && a != 5 && a != 7){
    return "incorrect";
  }
  else if(b != 2){
    return "incorrect";
  }
  else if( 5 > c || c > 100){
    return "incorrect";
  }
  else if(d >= 9 && d <= 20){
    return "incorrect";
  }
  else{
    return "correct";
  };
};


/*Complete the `canIGet` function. This function should:
    - take two arguments:
        - 'item' should represent what the user wants to buy
        - 'money' should represent how many dollars a user has
        - return 'true' if a user can afford a given item according to the price chart below, false otherwise:
            - 'MacBook Air' - $999
            - 'MacBook Pro' - $1299
            - 'Mac Pro' - $2499
            - 'Apple Sticker' - $1
        - return 'false' if the 'item' is not in the above list apple products
    For example:
    ```javascript
        canIGet('MacBook Air', 100) // returns false*/
module.exports.canIGet = function(item,money){
    if(item === "MacBook Air" && money >= 999){
      return true;
    }
    else if (item === "MacBook Pro" && money >= 1299){
      return true;
    }
    else if (item === "Mac Pro" && money >= 2499){
      return true;
    }
    else if (item === "Apple Sticker" && money >= 1){
      return true;
    }
    else{
      return false;
    }
};
//