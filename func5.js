function func5(stringToUse) {
/**
   6. Write a JavaScript function that accepts a string as a parameter and find the longest word
    within the string. 
    Example string: 'Web Development Tutorial' 
    Expected Output: 'Development'
*/  
    const arrayOfStrings = stringToUse.split(" ");
    let biggestArrayIndex = -1;
    
    for (let i in arrayOfStrings){
        if (biggestArrayIndex === -1){
            biggestArrayIndex = i
            continue
        }
        if (arrayOfStrings[i].length > arrayOfStrings[biggestArrayIndex].length){
            biggestArrayIndex = i 
        }
    }
    console.log(arrayOfStrings[biggestArrayIndex])
    return [`${arrayOfStrings[biggestArrayIndex]} is the longest word.`]



    }
    
    export { func5 }