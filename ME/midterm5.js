/*Create a function validateSchema that checks an object against a schema definition. 
If any properties are missing or have the wrong data type, 
the function must throw a custom ValidationError containing an array of the invalid field names. 
Write a wrapper function safeValidate that catches this error and returns the joined string of invalid fields.
*/
class ValidationError extends Error {
    constructor(fields) {
        super();
        this.fields = fields;
    }
}

function validateSchema(data, schema) {
    // Code Here
}

function safeValidate(data, schema) {
    // Code Here
}

// Test Code
const userSchema = { name: 'string', age: 'number', active: 'boolean' };
const userData = { name: 'Alice', age: 'thirty', active: 1 };
console.log(safeValidate(userData, userSchema));
