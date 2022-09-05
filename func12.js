function func12(positiveInt) {
    /**13. Write a JavaScript function to compute the factors of a positive integer. */
    if (positiveInt < 0) { return ["Comeback with a positive integer please."] };
    let factors = [];
    for (let i = 0; i <= positiveInt;i++)
    {
        if(positiveInt % i === 0){
            factors.push(i);
        }
    }
    return ["These are the factors of "+positiveInt,...factors]
}
export { func12 }