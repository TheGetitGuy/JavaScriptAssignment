function func15(stringToExtract){
/**
16. Write a JavaScript function to extract unique characters from a string. 
Example string: "thequickbrownfoxjumpsoverthelazydog"
Expected Output: "thequickbrownfxjmpsvlazydg"
 */
let newArray = [];
const splitString = stringToExtract.split();
    for (let i of stringToExtract){
        if (newArray.find(n=>n==i)){continue};
        newArray.push(i)
    };

return["The string with unique characters only.",newArray.join('')]
}
export {func15}