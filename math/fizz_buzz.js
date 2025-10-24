/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let result = []
    for (let i = 1; i <= n; i++) {
        if ((i % 3) === 0 && (i % 5) === 0) {
            result.push("FizzBuzz")
            continue;
        }
        if ((i % 3) === 0 && (i % 5) !== 0) {
            result.push("Fizz")
            continue;
        }
        if ((i % 5) === 0 && (i % 3) !== 0) {
            result.push("Buzz")
            continue;
        }
        else {
            result.push(i.toString())
        }
    }
    return result;
};