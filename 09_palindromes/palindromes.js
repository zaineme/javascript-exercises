const palindromes = function (string) {
    // Word only, alphanumeric
   let re = /[\W]/g;
   let processedString = string.toLowerCase().replace(re, '');
   let reversedString = processedString.split('').reverse().join('');
   return processedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
