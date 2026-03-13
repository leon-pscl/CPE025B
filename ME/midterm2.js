/*Write a function getInventoryValuation that takes an array of product objects. 
Each object contains name, qty, price, and category. 
The function must return a single object where each key is a category and each value is the total monetary value 
(quantity multiplied by price) of all items in that category. 
Items with a quantity of zero or less must be excluded from the calculation.
*/

function getInventoryValuation(inventory) {
    let result = {};
    inventory.forEach(item => {
        if (item.qty > 0) {
            if (!result[item.category]) {
                result[item.category] = 0;
            }
            result[item.category] += item.qty * item.price;
        }
    });

    return result;  
}

// Test Code
const testInventory = [
    { name: 'Monitor', qty: 2, price: 200, category: 'Tech' },
    { name: 'Mouse', qty: 0, price: 50, category: 'Tech' },
    { name: 'Desk', qty: 1, price: 300, category: 'Furniture' },
    { name: 'Lamp', qty: 2, price: 50, category: 'Furniture' }
];
console.log(getInventoryValuation(testInventory)); 
