/**
 * @param {string} message
 * @param {number} size
 * @return {string}
 */
var encryptString = function(message, size) {
    let result = message;
    let madeChange = true;
    
    while (madeChange) {
        madeChange = false;
        for (let i = 0; i <= result.length - size; i++) {
            let isConsecutive = true;
            
            // Check if next 'size' characters are same
            for (let j = i + 1; j < i + size; j++) {
                if (result[i] !== result[j]) {
                    isConsecutive = false;
                    break;
                }
            }
            
            if (isConsecutive) {
                // Remove the consecutive characters
                result = result.slice(0, i) + result.slice(i + size);
                madeChange = true;
                break;
            }
        }
    }
    
    return result;
};

console.log(encryptString('dabcccbbaae', 3))