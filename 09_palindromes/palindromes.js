const palindromes = function (string) {
    const processedString = string.toLowerCase().replace(/[\W_]/g, '');
    return processedString.split('').reverse().join('') == processedString;
};

// Do not edit below this line
module.exports = palindromes;
