function func7(stringToUse)
{
/**
8. Write a JavaScript function that accepts a number as a parameter and check the number is
prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself.
*/
let isPrime = true;
let intToUse = parseInt(stringToUse) 

if (isNaN(intToUse))
{
    return (["This is not a Number."])
}

for (let i = 2; i < intToUse; i += 1)
{
    console.log(intToUse % i)
    if (intToUse % i === 0)
    {
        isPrime = false
    }    

}

return(
    [`${stringToUse} is ${isPrime ? "Prime" : "not Prime"}.`]
)
}



export {func7}