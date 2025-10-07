/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Approach 1: Using Set (Most efficient - O(n) time, O(n) space)
function containsDuplicate(nums) {
    const seen = new Set();
    
    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    
    return false;
}