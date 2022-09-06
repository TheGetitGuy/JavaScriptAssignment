function func19(stringLength = 0){
    /**
     * 20. Write a JavaScript function that generates a string id (specified length) of random characters.
Sample   character   list:
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" 
     */
    const characters = ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789").split('');
    let workingArray = [];
    for(let i = 0; i < stringLength; i++){
        workingArray.push((characters[Math.floor(Math.random()*characters.length)]))
        
    }
    console.log(workingArray)
    return[`Random String of ${stringLength} = ` + (workingArray.join(''))]
}
    
    export {func19}