/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const MIN_INT_32 = -2147483648;  // -2^31
    const MAX_INT_32 = 2147483647;   // 2^31 - 1

    let sign = Math.sign(x);
    let str = Math.abs(x).toString();

    // Reverse the string correctly
    let reversedStr = str.split('').reverse().join('');
    let result = parseInt(reversedStr) * sign;

    // Return 0 if out of bounds
    if (result < MIN_INT_32 || result > MAX_INT_32) {
        return 0;
    }

    return result;
};