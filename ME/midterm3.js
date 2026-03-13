/*Implement a higher-order function named composePipeline that accepts an array of functions. 
It must return a new function that, when called with an initial value, 
passes that value through each function in the array sequentially (left-to-right), 
using the output of one as the input for the next. 
Do not use Array.prototype.map.*/
function composePipeline(fns) {
    return function(initialValue) {
        let result = initialValue;
        for (let fn of fns) {
            result = fn(result);
        }
        return result;
    };
}

// Test Code
const add2 = x => x + 2;
const sqr = x => x * x;
const half = x => x / 2;
const pipeline = composePipeline([add2, sqr, half]);
console.log(pipeline(4));

