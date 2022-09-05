function func10(...arrayOfNumbers){
/**
 * 11. Write a JavaScript function which will take an array of numbers stored and find the second
lowest and second greatest numbers, respectively. 
 */
    if (arrayOfNumbers.length < 2){
        return ["This function needs at least 2 numbers."]
    }
    arrayOfNumbers = arrayOfNumbers.sort((a, b)=>{
        return (a - b)
    })
    console.log(arrayOfNumbers)
    return [ "Second smallest", arrayOfNumbers[1],"Second biggest", arrayOfNumbers[arrayOfNumbers.length-2]]
}
export {func10}