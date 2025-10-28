/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    if (n <= 0) return false;
    if (n === 1) return true;
    
    let toCheck = 1;
    while (toCheck <= n) {
        toCheck = toCheck * 3;
        if (toCheck === n) {
            return true;
        }
    }
    return false;
};