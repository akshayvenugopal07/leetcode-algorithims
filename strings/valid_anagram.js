/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let array1 = s.split('');
    let array2 = t.split('');
    array1.sort();
    array2.sort();
    if (array1.length !== array2.length) {
        return false;
    }
    for(let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
};