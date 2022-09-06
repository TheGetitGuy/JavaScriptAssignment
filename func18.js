function func18(arr, numb){
    /**
     * 19. Write a JavaScript function that returns array elements larger than a number. 
     */
    if (typeof arr != "object"){return["First element needs to be an array of numbers"]}
    if (typeof numb != "number"){return["Second element needs to be a number"]}
    let arrayToReturn = [];
    for (let i in arr)
    {
        if (parseInt(arr[i]) > numb)
        {
            arrayToReturn.push(arr[i])
        }
    }
    return[`Numbers bigger than ${numb}`, ...arrayToReturn]

    }
    
    export {func18}