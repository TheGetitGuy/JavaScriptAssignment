function func1(stringToReverse){
/**
2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
madam or nurses run.
*/ 
    return([stringToReverse.split("").reverse().join("")==stringToReverse])
}

export {func1}