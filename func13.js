function func13(totalAmount, coinArray = ([25, 10, 5, 2, 1])){
/**
14. Write a JavaScript function to convert an amount to coins. 
Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
Output: 25, 10, 10, 1 
*/
if(typeof totalAmount != Number){
    return["Please enter a number and an optional coin array[#,[25,10,5,1]]"]
};
let workingAmount = totalAmount;
let newCoinArray = [];
for (let i of coinArray)
{
    console.log(i)
    newCoinArray.push(`Current coin denomination ${i}`)
    newCoinArray.push(Math.floor(workingAmount / i))
    workingAmount -= (Math.floor(workingAmount / i)*i)
}


return[...newCoinArray]

}
export {func13}