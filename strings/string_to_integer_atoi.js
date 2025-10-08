/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    const MIN_INT_32 = -2147483648;  // -2^31
    const MAX_INT_32 = 2147483647;   // 2^31 - 1

    let i = 0;
    let sign = 1;
    let result = 0;

    // Step 1: Skip leading whitespace
    while (i < s.length && s[i] === ' ') {
        i++;
    }

    // Step 2: Check for sign
    if (i < s.length && (s[i] === '+' || s[i] === '-')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // Step 3: Convert digits and handle overflow
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        const digit = parseInt(s[i]);
        
        // Check for overflow before updating result
        if (result > Math.floor(MAX_INT_32 / 10) || (result === Math.floor(MAX_INT_32 / 10) && digit > MAX_INT_32 % 10)) {
            return sign === 1 ? MAX_INT_32 : MIN_INT_32;
        }
        
        result = result * 10 + digit;
        i++;
    }

    return result * sign;
};

// Test cases
console.log('Test 1 - "42":', myAtoi("42"));                    // Expected: 42
console.log('Test 2 - " -042":', myAtoi(" -042"));              // Expected: -42
console.log('Test 3 - "1337c0d3":', myAtoi("1337c0d3"));        // Expected: 1337
console.log('Test 4 - "0-1":', myAtoi("0-1"));                  // Expected: 0
console.log('Test 5 - "words and 987":', myAtoi("words and 987")); // Expected: 0
console.log('Test 6 - "+1":', myAtoi("+1"));                    // Expected: 1
console.log('Test 7 - "-91283472332":', myAtoi("-91283472332")); // Expected: -2147483648 (MIN_INT_32)
console.log('Test 8 - "91283472332":', myAtoi("91283472332"));   // Expected: 2147483647 (MAX_INT_32)
console.log('Test 9 - "":', myAtoi(""));                        // Expected: 0
console.log('Test 10 - "   ":', myAtoi("   "));                 // Expected: 0
console.log('Test 11 - "+-12":', myAtoi("+-12"));               // Expected: 0
console.log('Test 12 - "21474836460":', myAtoi("21474836460")); // Expected: 2147483647 (overflow)