function func3(stringToUse) {
    /**
    4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
    Example string: 'webmaster' 
    Expected Output: 'abeemrstw'
    Assume punctuation and numbers symbols are not included in the passed string
    */

    let stringArray = stringToUse.split("");
    let smallestnumber = Infinity
    let newStringArray = []
    let finished = false;
    while (!finished) {
        finished = true;
        for (let i = 1; i < stringArray.length; i++) {
            if (stringArray[i - 1] > stringArray[i]) {
                finished = false;
                let temp = stringArray[i - 1];
                stringArray[i - 1] = stringArray[i];
                stringArray[i] = temp;
            }
        }
    }
    console.log(newStringArray)

    return [" This is the alphabet sorted string",stringArray.join("")]


}

export { func3 }