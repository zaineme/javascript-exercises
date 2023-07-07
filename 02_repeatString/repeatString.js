const repeatString = function(text, times) {
    let result = '';
    if (text && times > 0) {
        result = (text).repeat(times);
    } else if (times < 0) {
        result = 'ERROR';
    }
    return result;
};

repeatString('test', 12);

// Do not edit below this line
module.exports = repeatString;
