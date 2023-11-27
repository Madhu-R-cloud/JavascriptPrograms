const { log } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter string: ', (inputString) => {
    if(inputString.length == 0){
        console.log("Enter 1 or More characters");
        rl.close();
    }else{
        const ChangedLastChar  = changeLastCharToUpperCase(inputString);
    console.log('Changed last Character to Upper Case in Given  String:', ChangedLastChar);
    rl.close();
    }
    
});

function changeLastCharToUpperCase(inputString) {
    var modifiedString;
    if (inputString.length > 0) {
        const charArray = inputString.split('');
        
        if(charArray[charArray.length - 1] == ' '){
            console.log("Last character is SPACE");
        }else{
            modifiedString = charArray[charArray.length - 1].toUpperCase();
        }
        

        return modifiedString;
    } else {

        return inputString;
    }
}

