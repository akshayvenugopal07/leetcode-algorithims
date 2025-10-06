
/**
 * Rotates array to the right by k steps
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums - The input array
 * @param {number} k - Number of steps to rotate right
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotateWithExtraSpace(nums, k) {
    const n = nums.length;
    k = k % n;
    
    if (k === 0) return;
    
    const rotated = new Array(n);
    
    // Place each element at its new position
    for (let i = 0; i < n; i++) {
        rotated[(i + k) % n] = nums[i];
    }
    
    // Copy back to original array
    for (let i = 0; i < n; i++) {
        nums[i] = rotated[i];
    }
}