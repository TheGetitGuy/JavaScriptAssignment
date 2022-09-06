function func17(arrayToSearch, valueToFind) {
    /**18. Write a function for searching JavaScript arrays with a binary search. 
    Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds
    the desired value.
    [[1,2,3,4,5,6,7,8],8]
    */
    let iterations = 0 
    const maxIterations = 100
    
    let middleElement = Math.ceil((arrayToSearch.length) / 2)
    let pathToIndex = []
    pathToIndex.push(middleElement)
    while (arrayToSearch[middleElement] !== valueToFind && iterations < maxIterations) {
        iterations++
        console.log(middleElement)
        if(Math.floor(middleElement / 2) === 0)
        {
            middleElement = 0 
            continue
        }
        if(middleElement >= arrayToSearch.length ){
            middleElement = arrayToSearch.length - 1
            continue
        }
        if (arrayToSearch[middleElement] > valueToFind) {

            middleElement -= Math.floor(middleElement / 2)
            pathToIndex.push(middleElement)
            continue
        }
        if (arrayToSearch[middleElement] < valueToFind) {
            middleElement += Math.ceil(middleElement / 2)
            pathToIndex.push(middleElement)
            continue
        } 
        
        
    }
    if(iterations >= maxIterations){
        return(["Is this in a sorted Array?"])
    }
    pathToIndex.push(middleElement)
    return(["Index is", ...pathToIndex])
}
export { func17 }