/*Write firstUniqueChar to find the first character in a string that appears only once. 
The search must be case-insensitive (e.g., 's' and 'S' are the same), 
but the function must return the character in its original casing from the string. 
An O(n2) nested loop solution is considered inefficient for this level; 
use a frequency map.*/
function firstUniqueChar(str) {
    const uniqChar = new Map();
    for(const character of str) {
        const lowerChar = character.toLowerCase();
        if(uniqChar.has(lowerChar)) {
            uniqChar.set(lowerChar, uniqChar.get(lowerChar) + 1);
        } else {
            uniqChar.set(lowerChar, 1);
        }
    }
    for(const character of str) {
        const lowerChar = character.toLowerCase();
        if(uniqChar.get(lowerChar) === 1) {
            return character;
        }
    }
    return null;
}


// Test Code
console.log(firstUniqueChar('sTreSS'));
console.log(firstUniqueChar('aabbc')); 


