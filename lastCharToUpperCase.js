// const { log } = require('console');
const readline = require('readline-sync');
const str1 = readline.question('Enter string: ');
    if(str1.length == 0){
        console.log("Enter 1 or More characters");
    }else{
        const ChangedLastChar  = changeLastCharToUpperCase(str1);
    console.log('Changed last Character to Upper Case in Given  String:', ChangedLastChar);
    }
    


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