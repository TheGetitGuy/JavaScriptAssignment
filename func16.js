function func16(stringToExtract){ 
/**17. Write a JavaScript function to get the number of occurrences 
 * of each letter in specified string
 */
const arrayOfString = stringToExtract.split("");

let countObj = {};
    for (let i of arrayOfString)
    {
        if(!countObj[i]){countObj[i]=0}
        console.log(i)
        
        countObj[i] = countObj[i]+1
    }
console.log(countObj)

return["Tally of letter occurences.", ...(Object.entries(countObj))]
}
export {func16}