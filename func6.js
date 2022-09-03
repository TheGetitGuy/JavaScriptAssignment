function func6(stringToUse) {
    /**
       Write a JavaScript function that accepts a string as a parameter and counts the number of
vowels within the string. 
Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as
vowel here. 
Example string: 'The quick brown fox' 
Expected Output: 5
    */
    let count = 0
    const vowels = ["a", "e", "i", "o", "u"]
    for (let i of stringToUse.toLowerCase().split("")) {
        for (let j of vowels) {
            if (i === j) { count++ }
        }
    }
    return [`${count} vowels in your string`]
}

export { func6 }