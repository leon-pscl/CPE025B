/*Create a function sumDeepStrictNumbers that accepts a multidimensional array 
(an array containing nested arrays to any depth). 
The function must recursively traverse the entire structure and return the sum of all elements that are strictly of the Number data type. 
You must explicitly ignore NaN, numeric strings, booleans, and nulls.*/

function sumDeepStrictNumbers(arr) {
    let sum = 0;
    for (let element of arr) {
        if (Array.isArray(element)) {
            sum += sumDeepStrictNumbers(element);
        } else if (typeof element === 'number' && !isNaN(element)) {
            sum += element;
        }
    }
    return sum;
}

// Test Code
const testArray1 = [10, ['5', [true, 5]], null, [undefined, [10, NaN]]];
console.log(sumDeepStrictNumbers(testArray1));
