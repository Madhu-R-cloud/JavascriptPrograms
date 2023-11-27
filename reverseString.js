const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a string: ', (inputString) => {
    const reversedString = reverseString(inputString);
    console.log('Reversed String:', reversedString);
    rl.close();
});

function reverseString(str) {
    return str.split('').reverse().join('');
}
