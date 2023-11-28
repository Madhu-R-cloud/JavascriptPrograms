const readline = require('readline-sync');

let str1 = readline.question("Enter string str1 :");

    console.log('Reversed String:', reverseString(str1));

function reverseString(str) {
    let reversedString = '';

    for(let i = str.length - 1; i >= 0;i--){
        reversedString += str[i];
    }
    return reversedString;
}
