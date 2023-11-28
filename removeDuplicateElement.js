const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function removeDuplicates(str) {

    return [...new Set(str)].join('');
   
}

rl.question('Enter a string: ', (userInput) => {
    const result = removeDuplicates(userInput);
    console.log(`String after removing duplicates: ${result}`);
    rl.close();
});
