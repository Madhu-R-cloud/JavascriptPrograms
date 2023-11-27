const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findMaxMin(arr) {
    if (arr.length === 0) {
        return null; 
    }

    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
        }
    }

    return { max, min };
}

rl.question('Enter elements of the array (space-separated): ', (input) => {
    const elements = input.split(' ').map(Number);


    if (elements.every(Number.isFinite)) {
        const result = findMaxMin(elements);

        if (result !== null) {
            console.log('Array Elements:', elements);
            console.log('Maximum Value:', result.max);
            console.log('Minimum Value:', result.min);
        } else {
            console.log('Array is empty.');
        }
    } else {
        console.log('Invalid input. Please enter valid numbers.');
    }

    rl.close();
});
