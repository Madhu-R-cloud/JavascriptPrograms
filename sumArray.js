const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumArrayElements(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

rl.question('Enter elements of the array (comma-separated): ', (input) => {
    // Convert the input string to an array of numbers
    const elements = input.split(',').map(Number);

    // Check if the array contains valid numbers
    if (elements.every(Number.isFinite)) {
        // Calculate the sum of array elements
        const result = sumArrayElements(elements);

        console.log('Array Elements:', elements);
        console.log('Sum of Array Elements:', result);
    } else {
        console.log('Invalid input. Please enter valid numbers.');
    }

    rl.close();
});
