/**
 * Find the single number that appears only once in an array
 * where all other numbers appear exactly twice
 * @param {number[]} nums - Array of integers
 * @return {number} - The unique number
 */
function singleNumber(nums) {
    let result = 0;
    
    // XOR all numbers together
    // Duplicate numbers will cancel out (a ^ a = 0)
    // Only the unique number will remain
    for (let num of nums) {
        result ^= num;
    }
    
    return result;
}