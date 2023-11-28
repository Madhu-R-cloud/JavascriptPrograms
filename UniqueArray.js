
const readline = require('readline-sync');

let str1 = readline.question('Enter elements of the array1 (comma-separated): ');
let str2 = readline.question('Enter elements of the array2 (comma-separated): ');
const elements1 = str1.split(',').map(Number);
const elements2 = str2.split(',').map(Number);

let result = mergeUniqueArrays(elements1, elements2);
console.log(result);

function mergeUniqueArrays(arr1, arr2) {
    let mergedArray = [];

    for (let i = 0; i < arr1.length; i++) {
        if (!mergedArray.includes(arr1[i])) {
            mergedArray.push(arr1[i]);
        }
    }

    for (let j = 0; j < arr2.length; j++) {
        if (!mergedArray.includes(arr2[j])) {
            mergedArray.push(arr2[j]);
        }
    }
    return mergedArray;
}


