/**
 * PROBLEM: Find intersection of two arrays keeping duplicates
 * 
 * Key insight: We can only take elements that exist in BOTH arrays,
 * and only as many times as they appear in the array with fewer occurrences
 */

var intersect = function(nums1, nums2) {
    // STEP 1: Create a frequency counter for nums1
    const map = new Map();
    for (let num of nums1) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    
    const result = [];
    
    // STEP 2: Go through nums2 and "consume" from our frequency map
    for (let num of nums2) {
        if (map.has(num) && map.get(num) > 0) {
            result.push(num);
            map.set(num, map.get(num) - 1);
        }
    }
    
    return result;
};