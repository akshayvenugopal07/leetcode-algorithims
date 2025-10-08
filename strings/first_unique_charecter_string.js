/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let array = s.split('');
    let map = new Map();
    for (let i = 0; i < array.length; i++) {
        if (map.has(array[i])) {
            map.set(array[i], map.get(array[i]) + 1)
        } else {
            map.set(array[i], 1)
        }
    }
    for (let i = 0; i < array.length; i++) {
        if(map.get(array[i]) === 1) {
            return i;
        }
    }
    return -1;
};