const fibonacci = function(number) {
    if (number < 0 ) {
        return 'OOPS';
    } 

    // we can also use array to store prev and next
    let prevNumber = 1;
    let nextNumber = 1;
    let tempNumber = 0;
    for (let index = 1; index < number; index++) {
        nextNumber = prevNumber + tempNumber;
        tempNumber = prevNumber;
        prevNumber = nextNumber;
    }
    return nextNumber;
};

// Do not edit below this line
module.exports = fibonacci;
