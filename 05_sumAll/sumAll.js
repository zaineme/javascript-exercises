const sumAll = function(param1, param2) {
    let result = 'ERROR';
    if (Math.sign(param1) === 1 && Math.sign(param2) === 1 
        && Number.isInteger(param1) && Number.isInteger(param2)) {
        let start = param1;
        let end = param2;
        if (param2 < param1) {
            start = param2;
            end = param1;
        }
        result = 0;
        for (let index = start; index <= end; index++) {
            result += index;
        }
    }
    return result;
};

sumAll([1, 4]);
// Do not edit below this line
module.exports = sumAll;
