const removeFromArray = function(origArray, ...args) {
    for (let index = 0; index < args.length; index++) {
        let argsKey = origArray.indexOf(args[index]);
        if (argsKey !== -1) {
            origArray.splice(argsKey, 1);
        }
    }
    // console.log(origArray);
    return origArray;
};

// removeFromArray([1,2,3,4], 2, 4);
// Do not edit below this line
module.exports = removeFromArray;
