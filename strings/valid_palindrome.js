/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let string = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let charArray = string.split('');
    if (charArray.length === 0 || charArray.length === 1) return true;
    for (let i = 0; i < charArray.length / 2; i++) {
        if(charArray[i] !== charArray[charArray.length - 1 - i]) {
            return false;
        }
    }
    return true;
};