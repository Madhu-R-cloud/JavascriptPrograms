var readline = require("readline-sync");

const str1 = readline.question('Enter elements of the array (space-separated):');
const elements = str1.split(' ').map(Number);

console.log('Original Array:',elements);

const resultArray = squareAndSwap(elements);
console.log('Array after squaring and swapping adjacent elements:', resultArray);


// Function to square adjacent elements and swap them
function squareAndSwap(arr) {
   
    for (let i = 0; i < arr.length - 1; i += 2) {
       
        const squaredA = arr[i] ** 2;
        const squaredB = arr[i + 1] ** 2;

        arr[i] = squaredB;
        arr[i + 1] = squaredA;
    }

    return arr;
}

