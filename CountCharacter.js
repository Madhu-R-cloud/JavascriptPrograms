const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a string to Count a Character: ', (inputString) => {
    const totalCharacter = countChar(inputString);
    console.log('Total Character in a String:', totalCharacter);
    rl.close();
});

function countChar(str) {
        let count = 0;
        for (const char of str) {
             if (char != ' ') {
                count ++;
             }
        }
        console.log(count);
        return count;
    }

