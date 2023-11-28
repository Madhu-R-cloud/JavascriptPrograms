const readline = require('readline-sync');


const str1 = readline.question('Enter a string to Count a Character: ');
    const totalCharacter = countChar(str1);
    console.log('Total Character in a String:', totalCharacter);


function countChar(str) {
        let count = 0;
        for (const char of str) {
             if (char != ' ') {
                count ++;
             }
        }
        return count;
    }

