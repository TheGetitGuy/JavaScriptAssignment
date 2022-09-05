function func9(num1, num2) {
    /**
     * 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
     */
    if (typeof num1 != Number || typeof num2 != Number){
        return ["Two numbers [#,#] are expected."] //Check if input is correct
    }
    let arrayToBuild = [];
    for (let i = 0; i < num1; i++) {//iterate num1
        let currentRow = [];
        for (let j = 0; j < num2; j++) {//iterate num2
            if (i === j){
                currentRow.push(1)
            } else {
                currentRow.push(0)
            }

        }
        arrayToBuild.push(currentRow)
    }

    return ["This is a identity matrix of " + [num1,num2],...arrayToBuild]

}

export { func9 }