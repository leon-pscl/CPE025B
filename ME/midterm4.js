/*Write a recursive function power that calculates a base raised to an exponent. 
The function must support negative exponents (returning a fraction) and utilize a global or closure-based memo object to cache results. 
Using Math.pow or the ** operator results in failure.*/

const memo = {};
function power(base, exp) {
    if (exp === 0){
        return 1;       
    } 
    else if(exp < 0){
        exp = Math.abs(exp); 
        return (1 / power(base, exp));
    }

    else if(exp > 0){
        return base * (power(base, exp - 1));
    }
}
// Test Code
console.log(power(2, 5));
console.log(power(2, -2));
