/**
 * Remove duplicates from sorted array in-place
 * @param {number[]} nums - sorted array in non-decreasing order
 * @return {number} - number of unique elements
 */
function removeDuplicates(nums) {
    // Edge case: empty array
    if (nums.length === 0) return 0;
    
    // Two pointer approach
    // slow pointer tracks the position for next unique element
    let slow = 0;
    
    // fast pointer scans through the array
    for (let fast = 1; fast < nums.length; fast++) {
        // If current element is different from previous unique element
        if (nums[fast] !== nums[slow]) {
            slow++; // Move slow pointer to next position
            nums[slow] = nums[fast]; // Place unique element at slow position
        }
    }
    
    // Return count of unique elements (slow + 1 since slow is 0-indexed)
    return slow + 1;
}