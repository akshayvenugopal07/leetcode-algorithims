/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0;
    if (needle.length > haystack.length) return -1;
    
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let j = 0;
        // Check if needle matches starting at position i
        while (j < needle.length && haystack[i + j] === needle[j]) {
            j++;
        }
        // If we matched the entire needle
        if (j === needle.length) {
            return i;
        }
    }
    return -1;
};