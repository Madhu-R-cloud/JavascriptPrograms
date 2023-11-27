const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter elements of the array (space-separated): ', (input) => {
    const elements = input.split(' ').map(Number);

    if (elements.every(Number.isFinite)) {
        const sortedArrayAscending = elements.slice().sort((a, b) => a - b);

        const sortedArrayDescending = elements.slice().sort((a, b) => b - a);

        console.log('Original Array:', elements);
        console.log('Sorted Array (Ascending):', sortedArrayAscending);
        console.log('Sorted Array (Descending):', sortedArrayDescending);
    } else {
        console.log('Invalid input. Please enter valid numbers.');
    }

    rl.close();
});
