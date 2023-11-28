const readline = require('readline-sync');

let str1 = readline.question('Enter elements of the array (comma-separated): ');

const elements = input.split(',').map(Number);

if (elements.every(Number.isFinite)) {
    const result = sumArrayElements(elements);

    console.log('Array Elements:', elements);
    console.log('Sum of Array Elements:', result);
} else {
    console.log('Invalid input. Please enter valid numbers.');
}

function sumArrayElements(arr) {
    let sum = 0;
    for(let i = 0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}



