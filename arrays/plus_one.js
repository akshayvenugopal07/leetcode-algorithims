/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // Start from the rightmost digit (least significant)
    for (let i = digits.length - 1; i >= 0; i--) {
        // If current digit is less than 9, just increment and return
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        
        // If current digit is 9, set it to 0 and continue (carry over)
        digits[i] = 0;
    }
    
    // If we reach here, all digits were 9 (e.g., [9,9,9] -> [1,0,0,0])
    // We need to add a leading 1
    return [1, ...digits];
};