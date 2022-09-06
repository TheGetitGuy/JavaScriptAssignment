function func0(stringToReverse){ 
    /**question 1: 1. Write a JavaScript function that reverse a number. 
Example x = 32243;
Expected Output: 34223*/ 
    if(typeof stringToReverse == "number"){stringToReverse = ("" +stringToReverse)}
    return([stringToReverse.split("").reverse().join(""),"is the reversed number"])
}

export {func0}