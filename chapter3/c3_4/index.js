const {odd,even} = require('./var');

function checkStringOddOrEven(str) {
    if(str.length % 2 ) { // 홀수면
        return odd;
    }
    return even;
}

console.log(checkStringOddOrEven('hello'));

console.log(module.exports === exports);