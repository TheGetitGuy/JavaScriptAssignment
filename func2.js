function func2(stringToUse){
/**
3. Write a JavaScript function that generates all combinations of a string. 
Example string: 'dog' 
Expected Output: d, do, dog, o, og, g
*/ 
    let arrayOfStringCombos = [] 
    for (let i = 0; i < stringToUse.length ;i++)
    {
        for (let j = i+1; j < stringToUse.length +1 ;j++)
        { 
            arrayOfStringCombos.push(stringToUse.slice(i, j))
        } 
    }
    return(["These are all the combos",...arrayOfStringCombos])
}

export {func2}