
var readline = require("readline-sync");

const str1 = readline.question('Enter elements of the array (space-separated):');
const elements = str1.split(' ').map(Number);
console.log(elements);
console.log(elements.slice());
if (elements.every(Number.isFinite)) {

    const sortedArrayAscending = bubbleSort(elements.slice(), 'ascending');

    const sortedArrayDescending = bubbleSort(elements.slice(), 'descending');

    console.log('Original Array:', elements);
    console.log('Sorted Array (Ascending):', sortedArrayAscending);
    console.log('Sorted Array (Descending):', sortedArrayDescending);
} else {
    console.log('Invalid input. Please enter valid numbers.');
}

function bubbleSort(arr, order) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
           
            if ((order === 'ascending' && arr[j] > arr[j + 1]) ||
                (order === 'descending' && arr[j] < arr[j + 1])) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}
