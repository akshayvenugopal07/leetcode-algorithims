/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // If numRows is 1 or string length is less than numRows, return original string
    if (numRows === 1 || s.length <= numRows) return s;
    
    // Create array of strings for each row
    let rows = Array(numRows).fill('');
    
    // Current row and direction variables
    let currentRow = 0;
    let goingDown = false;
    
    // Iterate through each character in string
    for (let char of s) {
        // Add current character to appropriate row
        rows[currentRow] += char;
        
        // If we're at top or bottom row, change direction
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }
        
        // Move to next row based on direction
        currentRow += goingDown ? 1 : -1;
    }
    
    // Join all rows together
    return rows.join('');
};